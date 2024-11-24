"use client";

import useUser from "@/app/hook/useUser";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { checkout } from "@/lib/actions/stripe";
import { loadStripe } from "@stripe/stripe-js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/dev.env" });

function Checkout({ priceId }: { priceId: string; }) {
    const { data: user } = useUser();
    const router = useRouter();

    const handleCheckout = async () => {
        if (user?.id) {
            const data = JSON.parse(await checkout(user.email!, priceId, location.origin));

            const stripe = await loadStripe(`${process.env.STRIPE_PK}`);

            const res = await stripe?.redirectToCheckout({ sessionId: data.id });

            if (res?.error) {
                alert("Fail to checkout");
            }
        } else {
            router.push("/auth");
        }
    };


    return (
        <Button className="w-full" onClick={handleCheckout}>
            Getting Started
        </Button>
    );
}
export default Checkout;