import authApi from "../apis/authApi";

export const checkAuth = async (req, res, next)  => {

    try {
        const { authorization } = req.headers;
        const { data } = await authApi.get("/validate_token", {
            headers: {
                'Authorization': authorization
            }
        });
        req.user = data;
        next();
    } catch(e) {
        console.log('try to check auth', e)
        res.status(401).send({
            message: "Unauthorized"
        });
    }
}