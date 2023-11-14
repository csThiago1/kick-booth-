import { MenuIcon } from "lucide-react";
import { Card, CardContent } from "./card";
import { Button } from "./button";

const Header = () => {
    return (
    <Card className="flex justify-between p-[1.875rem]">    
        <Button size="icon" variant="outline">
            <MenuIcon />
        </ Button>

        <h1>Kick Booth</h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon />
        </ Button>
    </Card>    
    );
};

 export default Header;