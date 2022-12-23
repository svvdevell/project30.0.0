import {useSelector, useDispatch} from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {deposit, withdraw, reset} from "../redux/investment/actions";

const InvestmentCard = () => {
    const {amount, error} = useSelector((state) => state.investment);
    const dispatch = useDispatch();

    const handleDeposit = () => {
        dispatch(deposit(10));
    };

    const handleWithdraw = () => {
        dispatch(withdraw(10));
    };

    const handleReset = () => {
        dispatch(reset());
    };
    return (
        <Card sx={{maxWidth: 360, m: "0 auto"}}>
            <CardContent>
                <Typography sx={{fontSize: 20, textAlign: "center"}} gutterBottom>
                    Investment
                </Typography>
                <Typography sx={{mb: 1.5, textAlign: "center"}}>
                    {amount}$
                </Typography>
                {error && <Typography sx={{textAlign: "center", color: "red"}}>
                    {error}
                </Typography>}
            </CardContent>
            <CardActions sx={{justifyContent: "center"}}>
                <Button size="small" variant="contained" onClick={handleDeposit}>Deposit 10$</Button>
                <Button size="small" variant="contained" onClick={handleWithdraw}>Withdraw 10$</Button>
                <Button size="small" variant="contained" onClick={handleReset}>Reset</Button>
            </CardActions>
        </Card>
    );
};

export default InvestmentCard;