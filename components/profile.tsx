"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import useUser from "@/app/hook/useUser";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

function Profile() {
    const { isFetching, data } = useUser();
    console.log(isFetching, data);

    const queryClient = useQueryClient();

    const router = useRouter();

    if (isFetching) {
        return <></>;
    }

    const handleLogout = async () => {
        const supabase = createClient();
        queryClient.clear();
        await supabase.auth.signOut();
        router.refresh();
        location.reload();
    };


    return (
        <div className="cursor-pointer">
            {!data?.id ? <Link href="/auth"><Button variant="outline">SignIn</Button></Link> : <>{data?.image_url ? <Image src={data.image_url || ""} alt={data.display_name || ""} width={50} height={50} className="rounded-full ring-2" onClick={handleLogout} /> : <div className="h-[50px] w-[50px] flex items-center justify-center ring-2 text-2xl rounded-full cursor-pointer" onClick={handleLogout}>
                <h1>{data.email![0]}</h1></div>}</>}
        </div>
    );
}
export default Profile;