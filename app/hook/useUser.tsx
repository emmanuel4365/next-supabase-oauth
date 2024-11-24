"use client";

import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

const initUser = {
    created_at: "",
    display_name: "",
    email: "",
    id: "",
    image_url: ""
};

function useUser() {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const supabase = createClient();
            const { data } = await supabase.auth.getSession();
            console.log(data);
            if (data.session?.user) {
                //fetch user info profile
                const { data: user } = await supabase.from("profiles").select("*").eq("id", data.session.user.id).single();
                return user;
            }
            return initUser;

        }
    });
}
export default useUser;