import '../globals.css';
import Link from "next/link";
import GalleryEntry from "./GalleryEntry"

export default function Gallery() {

    const testEntries = [  
        { 
            src: "./",
            title: "Image1", 
            author: "Joseph Shim", 
            dateCreated: "03/01/2024",
        }, 
        { 
            src: "./",
            title: "Image2", 
            author: "Joseph Shim", 
            dateCreated: "03/02/2024",
        }, 
        { 
            src: "./",
            title: "Image3", 
            author: "Joseph Shim", 
            dateCreated: "03/03/2024",
        }, 
        { 
            src: "./",
            title: "Image4", 
            author: "Joseph Shim", 
            dateCreated: "03/04/2024",
        }, 
        { 
            src: "./",
            title: "Image5", 
            author: "Joseph Shim", 
            dateCreated: "03/05/2024",
        }, 

    ]; 

    return (
        <test>  
            <div className=".bg-gray-300 .h-full">
                <header>
                    <li><Link href="/draw">New Sketch</Link></li>
                    <li><Link href="/testpage">Splash Page</Link></li>

                </header>
                <div className="gallery-body">
                    <div className="gallery-body-container"> 
                        { 
                            testEntries.map((e, i) => {
                                return (
                                    <> 
                                        <GalleryEntry 
                                            src={e.src} 
                                            title={e.title} 
                                            author={e.author} 
                                            dateCreated={e.dateCreated} 
                                            key={i}/> 
                                    </>
                                )
                            })
                        }
                    </div> 
                </div> 

            </div>

        </test>
    )
}