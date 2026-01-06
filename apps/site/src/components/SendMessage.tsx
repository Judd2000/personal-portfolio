import { type Dispatch, type SetStateAction, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { Button, FilledInput, InputAdornment, TextareaAutosize, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { matchIsValidTel } from "mui-tel-input";
import { messageApi } from "../services/api/message.api";

const MAX_CHARACTERS = 900;

interface Props {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    onMessageSuccess: () => void;
    onMessageFailure: () => void;
    onMessageDisabled: () => void;
    throttleTime: number;
}

const defCountryCode = '+1';

const validEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const SendMessage = ({
                                setShowModal,
                                onMessageSuccess,
                                onMessageFailure,
                                onMessageDisabled,
                                throttleTime
                            }: Props) => {
    const [messageCharacters, setMessageCharacters] = useState(0);

    const [disableMessageInput, setDisableMessageInput] = useState(false);

    const [messageText, setMessageText] = useState('');

    const [contactInfo, setContactInfo] = useState('');

    const [invalidContact, setInvalidContact] = useState(false);

    const [isEnteringPhone, setIsEnteringPhone] = useState(false);

    const [name, setName] = useState('');
    const [invalidName, setInvalidName] = useState(false);
    const [invalidMessage, setInvalidMessage] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [sendDisabled, setSendDisabled] = useState(false);

    let timeoutId: NodeJS.Timeout;

    const throttleButton = (callback: () => Promise<void>) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        if (!sendDisabled) {
            callback();
            setSendDisabled(true);

            timeoutId = setTimeout(() => {
                setSendDisabled(false);
            }, throttleTime)
        }
    }

    const onKeyDown = (change: any) => {
        const { value } = change.currentTarget;
        const isDeleteKey = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].some((e) => e === change.key);

        if (isDeleteKey || (value?.length || 0) <= MAX_CHARACTERS) {
            setMessageText(value);
            setMessageCharacters(value?.length || 0);
        } else {
            // Prevent further input except for allowed keys
            change.preventDefault();
        }
    };

    const onInputChange = (change: any) => {
        let value = change.target.value;
        if (change.target.textLength < MAX_CHARACTERS) {
            setDisableMessageInput(false);
        } else {
            value = value.slice(0, MAX_CHARACTERS);
            setDisableMessageInput(true);
        }
        setInvalidMessage(!value.length);
        setMessageText(value);
        setMessageCharacters(value.length);
    };

    const closeMessageModal = () => {
        setShowModal(false);
        setMessageCharacters(0);
        setDisableMessageInput(false);
        setMessageText('');
        setIsLoading(false);
    }

    const onContactChange = (enteringPhone: boolean, contactChange?: any) => {
        if (contactChange) setContactInfo(contactChange.target.value);
        const newContactValue = contactChange ? contactChange.target.value : contactInfo
        if (!newContactValue) return;
        if (enteringPhone) {
            const validTelResult = matchIsValidTel(`${defCountryCode}${newContactValue}`);
            setInvalidContact(!validTelResult);
        } else {
            const valid = newContactValue.match(validEmailRegex);
            setInvalidContact(!valid)
        }
    }

    const onNameChange = (nameChange: any) => {
        setInvalidName(!nameChange.target.value.length)
        setName(nameChange.target.value);
    }

    const onPhoneEmailChange = () => {
        setIsEnteringPhone(!isEnteringPhone);
        onContactChange(!isEnteringPhone);
    }

    const onSendFailed = (error: any) => {
        console.error(error);
        onMessageFailure();
        setIsLoading(false);
    };

    const onSendPressed = async () => {
        throttleButton(async () => {
            const readyForSubmit = name && !invalidName && contactInfo && !invalidContact && messageText && !invalidMessage;
            if (readyForSubmit) {
                if (import.meta.env.PUBLIC_DISABLED_MESSAGE) {
                    onMessageDisabled();
                    return;
                }
                setIsLoading(true);
                try {
                    const { error } = await messageApi.sendMessage(name, contactInfo, messageText, isEnteringPhone);
                    if (error) {
                        onSendFailed(error);
                    } else {
                        onMessageSuccess();
                        closeMessageModal();
                    }
                } catch (e) {
                    onSendFailed(e);
                }
            }
        });
    }

    return (
        <div className="fixed min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 bg-black/75">
            <div className="bg-white p-4 relative md:w-1/2 w-4/5 my-2"
                 onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col gap-4">
                    <h2 className="text-black font-bold">Send Message</h2>
                    <div className="flex flex-row gap-4">
                        <span className="text-sm text-gray-700">Name:</span>
                        {invalidName && <span className="text-sm text-red-600 opacity-75">Required</span>}
                    </div>
                    <TextField
                        value={name}
                        onChange={onNameChange}
                        error={invalidName}
                        variant="filled"
                    />
                    <div className="flex flex-row gap-4">
                        <span className="text-sm text-gray-700">Contact Information for Reply:</span>
                        {invalidContact && <span
                            className="text-sm text-red-600 opacity-75">Must be a valid {isEnteringPhone ? 'phone' : 'email'}</span>}
                    </div>
                    <FilledInput
                        type={isEnteringPhone ? 'text' : 'email'}
                        value={contactInfo}
                        onChange={(e) => onContactChange(isEnteringPhone, e)}
                        startAdornment={(isEnteringPhone ?
                            <InputAdornment position="start">
                                <span className="mt-4 text-sm">{defCountryCode}</span>
                            </InputAdornment> : <></>)}
                        endAdornment={
                            <InputAdornment position="end">{
                                <Button
                                    variant="text"
                                    onClick={() => onPhoneEmailChange()}
                                >
                                    {isEnteringPhone ? 'Phone' : 'Email'}
                                </Button>
                            }</InputAdornment>
                        }
                        error={invalidContact}

                    />
                    <div className="flex flex-row gap-4">
                        <span className="text-sm text-gray-700">Message:</span>
                        {invalidMessage && <span className="text-sm text-red-600 opacity-75">Required</span>}
                    </div>
                    <TextField
                        value={messageText}
                        required
                        error={invalidMessage}
                        slotProps={
                            {
                                input: {
                                    inputComponent: TextareaAutosize,
                                    inputProps: {
                                        minRows: 3,
                                        maxRows: 8
                                    }
                                }
                            }
                        }
                        style={{
                            color: disableMessageInput ? "gray" : "black",
                            border: "1px gray solid",
                            padding: '5px 10px',
                            width: '100%'
                        }}
                        onKeyDown={onKeyDown}
                        onChange={onInputChange}
                    />
                    <span className="text-sm text-gray-700">{messageCharacters} / {MAX_CHARACTERS}</span>
                    <div className="flex gap-4 mt-4">
                        <button
                            className="bg-blue-950  text-white px-4 py-2 rounded-2xl hover:bg-blue-900 cursor-pointer w-35"
                            onClick={() => onSendPressed()}
                            disabled={sendDisabled}
                        >{isLoading ? <CircularProgress size={10}/> : 'Send Message'}</button>
                        <button className="px-4 py-2 rounded-2xl hover:bg-gray-400 bg-gray-600 cursor-pointer"
                                onClick={closeMessageModal}
                        >Cancel
                        </button>
                    </div>
                </div>
                <div className="absolute top-4 right-4 cursor-pointer">
                    <IoClose className="text-black text-lg" onClick={closeMessageModal}/>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;