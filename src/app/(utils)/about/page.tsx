import Title from "@/ui/Title";

export default function About(){
    
    return (
        <div className="grid grid-cols-[2f 1fr] gap-5 py-5">
            <div>
                <div>
                    <Title tag="h1">About Us</Title>
                    <Title tag="h3">Welcome to [Insert Your Website Name], where we provide a wide range of technical tools to simplify your daily tasks, enhance productivity, and add a touch of fun to your online experiences. Our goal is to offer a comprehensive collection of tools that cater to various needs, whether you're a developer, data analyst, or simply someone looking for a bit of amusement.</Title>
                </div>
                <div>
                    <Title tag="h2">Who We Are</Title>
                    <Title tag="p">At [Insert Your Website Name], we are a team of passionate developers and technology enthusiasts dedicated to creating innovative solutions that make your life easier. Our expertise lies in developing powerful tools that are both functional and user-friendly, ensuring that you have a seamless experience while utilizing our services.</Title>
                </div>
                <div>
                    <Title tag="h2">Our Services</Title>
                    <ul>
                        <Title tag="h3">Technical Tools:</Title>
                        <li>
                            <Title tag="p"><span>String Tools:</span> Simplify string manipulation, formatting, encoding, and decoding with our comprehensive suite of string tools.</Title>
                            <Title tag="p"><span>Number Tools: </span>Perform various numerical operations, conversions, calculations, and validations effortlessly using our number tools.</Title>
                            <Title tag="p"><span>Number Tools: </span>Perform various numerical operations, conversions, calculations, and validations effortlessly using our number tools.</Title>
                            <Title tag="p"><span>JSON Tools: </span>JSON Tools: Easily convert, validate, and manipulate JSON data with our efficient JSON tools.</Title>
                        </li>
                    </ul>
                </div>
            </div>
            <div>ssss</div>
        </div>
    )
}