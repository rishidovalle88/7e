import axios from 'axios';
import { ChangeEvent, createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { Account, Address } from '../models/ProfileModel';


interface ProfileContextData {
    address: Address;
    account: Account;
    setAddress: Dispatch<SetStateAction<Address>>,
    setAccount: Dispatch<SetStateAction<Account>>,
}

interface ProfileProviderProps {
    children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData);

export const ProfileProvider  = ({ children }: ProfileProviderProps) => {
    const [address, setAddress] = useState<Address>({} as Address);
    const [account, setAccount] = useState<Account>({} as Account);
    return (
        <ProfileContext.Provider value={{
            address,
            account,
            setAddress,
            setAccount,
        }}>
            {children}
        </ProfileContext.Provider>
    )
}