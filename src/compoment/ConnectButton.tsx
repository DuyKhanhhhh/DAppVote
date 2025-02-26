import { useEffect, useState } from 'react';
import { useConnect, useAccount, useDisconnect, useEnsAvatar } from 'wagmi';

function ConnectButton() {
    const { connect, connectors } = useConnect();
    const { isConnected, address } = useAccount();
    const { data: avatar, isLoading } = useEnsAvatar({
        address,
    });
    const { disconnect } = useDisconnect();

    if (isLoading) return <p>Đang tải...</p>;


    const onConnect = () => {
        if (isConnected) {
            disconnect();
        } else {
            connect({ connector: connectors[0] });
        }
    };

    return (
        <div className='font-lora text-lg onClick' onClick={onConnect}>
            <p>{address}</p>
            {isConnected ? `Disconnect` : 'Connect'}
        </div>

    );
}

export default ConnectButton;