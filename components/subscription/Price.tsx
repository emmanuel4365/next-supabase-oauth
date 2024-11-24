import { CircleCheck } from "lucide-react";
// import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Checkout from "./Checkout";

function Price() {

    const prices = [
        {
            title: "Hobby",
            description: "Start your next hobby side project",
            benefits: [
                "Improved productivity",
                "Enhanced performance",
                "Cost savings",
                "Improved communication",
                "Enhanced collaboration"
            ],
            amount: 10,
            priceId: "price_1QI5TbJfSJIz8jY5rPyRhlsQ"
        },
        {
            title: "Pro",
            description: "Start your next pro side project",
            benefits: [
                "Improved productivity",
                "Enhanced performance",
                "Cost savings",
                "Improved communication",
                "Enhanced collaboration"
            ],
            amount: 20,
            priceId: "price_1QI5VnJfSJIz8jY58x6rBUEB"
        },
        {
            title: "Enterprise",
            description: "Start your next enterprise side project",
            benefits: [
                "Improved productivity",
                "Enhanced performance",
                "Cost savings",
                "Improved communication",
                "Enhanced collaboration"
            ],
            amount: 100,
            priceId: "price_1QI5bXJfSJIz8jY5o5V75vMN"
        },

    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {prices.map((price, index) => {

                    const isPopular = index === 1;

                    return <div key={index} className={cn("border rounded-md p-5 space-y-5", { "ring-2 ring-green-500": isPopular })}>
                        <div className="space-y-3">
                            <h1 className="text-2xl font-bold">
                                {price.title}
                            </h1>
                            <h1 className="text-2xl font-bold">
                                ${price.amount}
                            </h1>
                            <p className="text-sm text-gray-400">
                                {price.description}
                            </p>
                        </div>
                        <div className="space-y-3">
                            {price.benefits.map((benefit, index) => {
                                return <div key={index} className="flex items-center gap-2">
                                    <CircleCheck />
                                    <h1 className="text-sm text-gray-400">{benefit}</h1>
                                </div>;
                            })}
                        </div>
                        <Checkout priceId={price.priceId} />
                    </div>;
                })}
            </div>
        </div>
    );
}
export default Price;