import {Divider, Flex, Tag, Typography} from "antd";
import CoinInfo from "./CoinInfo.jsx";

export default function CoinInfoModal({coin}) {
    return (
        <>
            <CoinInfo coin={coin} withSymbol/>
            <Divider/>
            <Typography.Paragraph>
                <Typography.Text strong>
                    1 hour:
                    <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
                </Typography.Text>
                <Typography.Text strong>
                    1 day:
                    <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>
                </Typography.Text>
                <Typography.Text strong>
                    1 weak:
                    <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
                </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>
                    Price:
                </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price BTC: </Typography.Text>
                {coin.priceBtc}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Market Cap: </Typography.Text>
                {coin.marketCap}$
            </Typography.Paragraph>
            {coin.contractAddress && <Typography.Paragraph>
                <Typography.Text strong>Price: </Typography.Text>
                {coin.contractAddress}
            </Typography.Paragraph>}
        </>
    )
}