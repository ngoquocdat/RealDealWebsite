import React from "react";


export const RealDealContext = React.createContext<any>({
    register: {
        isUserRegistered: null,
        setIsUserRegistered: () => null,
    },
    joinRoom: {
        isUserJoinedRoom: null,
        setIsUserJoinedRoom: () => null,
    },
    joinDialog: {
        isOpenJoinDialog: null,
        toggleIsOpenDialog: () => null,
    },
    processJoinRoom: {
        isProcessJoinRoom: null,
        setIsProcessJoinRoom: () => null,
    }
});

export interface IContext {
    register: {
      isUserRegistered: boolean;
      setIsUserRegistered: React.Dispatch<React.SetStateAction<boolean>>;
    };
    joinRoom: {
      isUserJoinedRoom: boolean;
      setIsUserJoinedRoom: React.Dispatch<React.SetStateAction<boolean>>;
      rooms: ["ROOM A"];
    };
    joinDialog: {
      isOpenJoinDialog: boolean;
      toggleIsOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
    };
    processJoinRoom: {
      isProcessJoinRoom: boolean;
      setIsProcessJoinRoom: React.Dispatch<React.SetStateAction<boolean>>;
    }
}