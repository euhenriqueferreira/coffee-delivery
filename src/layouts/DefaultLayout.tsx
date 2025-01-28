import { Outlet } from "react-router-dom";

export function DefaultLayout() {
    return (
        <div>
            <h1>Oi</h1>
            <Outlet />
        </div>
    )
}