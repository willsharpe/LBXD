import Link from "next/link";

 function NavBar(){
    return(
        <header>
            <Link href={'/'} className="font-robotmono">
                <h1>
                    LETTERBOXD CLONE
                </h1>
            </Link>
            <Link href={'/login'}>
                <button>
                    <h1>
                    Login
                    </h1>
                </button>
    
            </Link>
            <Link href={'/signup'}>
                <button>
                <h1>
                    CREATE ACCOUNT
                </h1>   
                </button>         
            </Link>
        </header>
    )
}

export default NavBar;