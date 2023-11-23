import Image from "next/image";
export default function ProductCard({ price, color, name, image }) {
  return (
    <div class="group relative">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src="/product1.jpg"
          width={200}
          height={200}
          alt="Front of men&#039;s Basic Tee in black."
          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
        ></Image>
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {name}
            </a>
          </h3>
          <p class="mt-1 text-sm text-gray-500">color (black)</p>
        </div>
        <p class="text-sm font-medium text-gray-900">200</p>
      </div>
    </div>
  );
}
