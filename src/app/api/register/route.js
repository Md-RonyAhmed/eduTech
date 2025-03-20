import { User } from "@/model/user-model";

import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import { dbConnect } from "@/service/db";

export const POST = async (request) => {
    const { firstName, lastName, email, password, role } = await request.json();


    await dbConnect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role
    }

    try{
        await User.create(newUser);
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch(error) {
        console.error(error);
        return new NextResponse(error?.message, {
            status: 500,
          });
    }
}