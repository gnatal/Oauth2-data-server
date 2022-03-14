import authApi from "../apis/authApi";

export const checkAuth = async (req, res, next)  => {

    try {
        const { authorization } = req.headers;
        const { data } = await authApi.get("/check", {
            headers: {
                authorization
            }
        });
        req.user = data;
        next();
    } catch(e) {
        res.status(401).send({
            message: "Unauthorized"
        });
    }
}