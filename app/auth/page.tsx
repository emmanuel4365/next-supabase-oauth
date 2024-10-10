"use client";

import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { createClient } from "@/utils/supabase/client";

function Authpage() {

    function handleLoginWithOAuth(provider: "github" | "google") {
        const supabase = createClient();
        supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: location.origin + `/auth/callback`,
            },
        });

        return;
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
                <div className="flex items-center gap-2 ">
                    <KeyRound />
                    <h1 className="text-2xl font-bold">Next + Supabase</h1>
                </div>
                <p className="text-sm text-gray-300">Register/SignIn Today 👇</p>
                <div className="flex flex-col gap-5">
                    <Button className="flex items-center gap-2 w-full" variant={"outline"} onClick={() => { handleLoginWithOAuth("github"); }}> <BsGithub /> GitHub</Button>
                    <Button className="w-full flex items-center gap-2" variant={"outline"} onClick={() => { handleLoginWithOAuth("google"); }}> <FcGoogle /> Google</Button>
                </div>
                <div className="glowBox -z-10"></div>
            </div>
        </div>
    );
}
export default Authpage;