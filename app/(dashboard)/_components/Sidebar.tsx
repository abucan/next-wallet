import Logo from "@/components/Logo";

export default function Sidebar() {
    return <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm items-center">
        <div className="p-6">
        <Logo />
        </div>
        <div className="flex flex-col w-full">
            Routes
        </div>
    </div>
}