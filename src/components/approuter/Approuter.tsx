import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../Routes";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { Page404 } from "../../pages/page404/Page404";

export const Approuter = observer(() => {
    const context = useContext(Context);
    
    if (!context) {
        return null;
    }

    const { user } = context;

    return (
        <>
            <Routes>
                {/** Приватные маршруты (только для авторизованных) */}
                {user.isAuth && authRoutes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}

                {/** Публичные маршруты (доступны всем) */}
                {publicRoutes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}

                <Route path="*" element={<Page404/>} />
            </Routes>
        </>
    );
});

