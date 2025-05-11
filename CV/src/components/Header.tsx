export default function Header() {
    return (
        <div className="w-auto h-auto rounded-md outline">
            <header className="flex flex-col items-start space-y-2 ml-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    CV Application
                </h1>
                <p className="text-gray-700 dark:text-gray-300">
                    Let's build your CV in minutes!
                </p>
            </header>
        </div>
    )
}
