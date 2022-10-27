import { rest } from "msw";

const baseURL = "https://job-api-drf.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 2,
                username: "lee",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 2,
                profile_image: "https://res.cloudinary.com/djxmuiopy/image/upload/v1/media/images/user_1_njtoun"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];