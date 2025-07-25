import {Layout, Select, Space, Button, Modal, Drawer } from "antd";
import React, {useEffect, useState} from "react";
import {useCrypto} from "../../context/crypto-context.jsx";
import CoinInfoModal from "../CoinInfoModal.jsx";
import AddAssetForm from "../AddAssetForm.jsx";

const headerStyle = {
    width: "100%",
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};


export default function AppHeader() {
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)
    const [drawer, setDrawer] = useState(false)
    const [coin, setCoin] = useState(null)
    const {crypto} = useCrypto();

    useEffect(() => {
        const keypress = event => {
            if(event.key === '/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener("keypress", keypress)
        return () => document.removeEventListener("keypress", keypress)
    })

    function handleSelect(value) {
        setCoin (crypto.find((c) => c.id === value))
        setModal(true)
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                open={select}
                value="press / to open"
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                style={{width: 250}}
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={option =>
                    (
                        <Space>
                            <img
                                style={{width: 20}}
                                src={option.data.icon}
                                alt={option.data.label}
                            /> {option.data.label}
                        </Space>
                    )}
            />
            <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>

            <Modal
                open={modal}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={null}
            >
                <CoinInfoModal coin={coin} />
            </Modal>
            <Drawer
                title="Add Asset"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => setDrawer(false)}
                open={drawer}
                width={600}
                destroyOnClose

            >
                <AddAssetForm onClose={() => setDrawer(false)} />
            </Drawer>
        </Layout.Header>)
}