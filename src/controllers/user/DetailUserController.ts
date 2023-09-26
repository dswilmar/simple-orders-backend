import { Request, Response } from "express";
import { DetailUserSevice } from "../../services/user/DetailUserService";

class DetailUserController {
    
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;
        const detailUserSerice = new DetailUserSevice();
        const user = await detailUserSerice.execute(user_id);
        return res.json(user);
    }

}

export { DetailUserController }