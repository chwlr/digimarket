import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, DollarSign, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet suscipit ipsa soluta eaque libero corrupti deserunt, nihil voluptates ad nulla!"
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure similique sunt ad optio a ex?"
  },
  {
    name: 'What is for?',
    icon: Leaf,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam accusamus voluptatibus aliquam error pariatur!"
  },
  {
    name: 'Best price',
    icon: DollarSign,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam accusamus voluptatibus aliquam error pariatur!"
  }
]

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                  <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your marketplace for high-quality{' '}
                          <span className="text-blue-600">digital assets</span>
                          .
                      </h1>
                      <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to DigiMarket. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, error.</p>
                      <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href='/products' className={buttonVariants()}>Browse Market</Link>
                      </div>
                  </div>
            </MaxWidthWrapper>

            <section className="border-t border-gray-200 bg-gray-50">
              <MaxWidthWrapper className="py-20">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lag:gap-y-0">
                  {perks.map((perk) => (
                    <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                      <div className="md:flex-shrink-0 flex justify-center">
                        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-200">
                          {<perk.icon className="w-1/3 h-1/3"/>}
                        </div>
                      </div>

                      <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </MaxWidthWrapper>
            </section>
        </>
    )
}
