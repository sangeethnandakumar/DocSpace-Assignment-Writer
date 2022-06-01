import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    const [para, setPara] = useState(`1.	"The IT has been used in every business and for every function of a business." Do you agree? Give reasons for your answer. Also explain application of IT inbusiness.
    ANS: 111e success of every business depends on ce1tain factors.Some of which are accurate analysis, choosing the right technology and the fuhU"e vision. Research from the last two decade has proved that those organisations that do invest in technology and choose  the  path  of innovation increase their market share, financial figures and overall competitiveness. Infonnation technology is the only technology that provides you the opportunity to analyse specific data and plan your business journey accordingly. It also provides you many tools which  can  solve complex problems and plan the scalability (future growth) of yom business. In the modem age, it is proved that digital marketing is a great tool that let you promote your products or services to the global market while sitting in the comfmt of your remote office or home. And thanks to cloud computing and modem communication which enable you to fonn a global organisation, manage and monitor its virhial offices all over the world. Now I will briefly explain hmv information technology plays a vital role in different phases of business.
    Decision Making
    Speed and accuracy  are  at the heart of making  the  right  decision  for  your  business.Every successful organization has to go through a comprehensive market research process that enables management to  make  the  1ight  decision.Market  research  can  be  done in many \vays  through online  surveys, forms, blogs, group  discussions  using  the  World  Wide  Web  and  of  course through in -person  interviews as \Vell.Cunently, Big data, Google Analytics  ai1d Microsoft  CR11 Dynamics are also great tools to extract useful information which can impact decision making.These online tools not  only provide  real - time responses  from the potential  audience but also ensure the accuracy  of data by minimizing  the 1isk oflnunan errors.
    Marketing and Business Growth
    The heart of the business success lies in its marketing which enables the management to identify its target audience first and then obse1ve their trends and needs.The overall marketing covers public relation, advertising, promotion and sales which subsequently impact business grmvth.Many types of marketing can help you reach your potential customers.But I \vill briefly explain digital marketing here which was the dream in the past \: vithout Internet technology.Digital Marketing  is a modem phenomenon  that  let you promote  your  products  or se1vices all over the

    world.It is a broad te1m that includes many concepts like search engine optimization(SEO), pay per click(PPC), blogging, discussion forms, email shot, SMS, : rvIMS, social media marketing and Smartphone app adve1tisement etc.Currently web market is booming at a very fast pace because most entrepreneurs have understood that long tenn success in business is not possible without a digital presence on the internet.l'vf illions of new \\'ebsites are being added to the internet every year.
    Customer Support and Satisfaction
    Higher level of customer satisfaction is the key to success \Vhich cannot be achieved without a real - time customer support process.Business success depends on knowing its customer needs, trends, behaviors and satisfaction level.Effective communication is the best tool to understand the customer demands, problems and their solutions.Thanks to the Internet Technology that has enabled us to communicate with millions of potential or existing customer in real - time.IT provides many channels to communicate with the customer without going out in snow or rain.Some of these channels are email, Webinar, social media, member portals, online newsletters and text or multimedia messaging through the smartphone.Ente1vrise organizations normally use customer relationship management systems(CRlVI) to hold valuable data for understanding customer behaviors and future needs.
    Resource Management and Globalization
    Resource management plays a crucial role in business success.When it comes to medium or large organization, it is very hard for the top management to manage all the resources manually.These resources may include tangible, financial or human resources etc.Information technology has played a vital role in automating such complex problems by introducing user - friendly solutions.A decade ago, most of the resource management solutions were desktop based.Thanks to the internet and cloud technology which enables software engineers to introduce cloud - based ERP(Ente1vrise Resource Plam1ing) solutions.Now, the managers can manage or monitor their organizational resources virtually anywhere in the \\'orld by using their personal computer, laptops, tablets or Smartphone. TI1is concept has introduced the idea of globalization. Most of the multinational companies (Microsoft, Google, Amazon, McDonalds etc) in the world use these cloud-based solutions to manage their virtual or physical offices and staff worldwide.
    Conclusion
    I think, it is impossible to attain long te1m business success without leveraging the benefits of information technology in this digital age.The companies have to bear a reasonable cost to achieve this success because using an innovative approach in business strategy, employing highly trained IT professionals and making the right decisions at right time are the prerequisite of business success.As IT solutions continue to increase the productivity, efficiency and effectiveness of business operations and communication, business will continue to rely on Intonation Technology for success.

`);

    const [showAlpha, setAlpha] = useState(false);
    const [showBeta, setBeta] = useState(false);

    const [wiggleAlpha, setWiggleAlpha] = useState(5);
    const [wiggleBeta, setWiggleBeta] = useState(0);

    const [wiggleLeft, setWiggleLeft] = useState(0.03);
    const [lineDrop, setLineDrop] = useState(150);

    function IsEvenNumber(num) {
        return num % 2 === 0;
    }

    function GetRandom() {
        return Math.floor(Math.random() * (100 - 1) + 1);
    }

    function GetRangeRandom() {
        return Math.floor(Math.random() * (100 - 1) + 1);
    }

    function GetInnerLines(str) {
        const temp = str.split(' ').reduce((acc, c) => {
            const currIndex = acc.length - 1;
            const currLen = acc[currIndex].join(' ').length;
            if (currLen + c.length > lineDrop) {
                acc.push([c]);
            } else {
                acc[currIndex].push(c);
            }
            return acc;
        }, [[]]);
        const out = temp.map(arr => arr.join(' '));

        return out;
    }

    function RenderLine(line) {

        //TODO: Replace unsupported charactors

        let lineRenders = [];
        lineRenders.push(<br />);

        let innerLines = GetInnerLines(line);

        innerLines.forEach(innerLine => {
            lineRenders.push(<br />);

            let range = GetRangeRandom();
            let nbsps = "<pre id='space' style='display:inline'> </pre>".repeat(range * wiggleLeft);
            lineRenders.push(<p className="hw" dangerouslySetInnerHTML={{ __html: nbsps }}></p>);

            var words = innerLine.split(" ");
            words.forEach(word => {
                let random = GetRandom();
                let isEven = IsEvenNumber(random);
                let showRed = showAlpha ? "red" : "";
                let showBlue = showBeta ? "blue" : "";


                if (isEven) {
                    lineRenders.push(<p className={"hw " + showRed + " wiggle-sub"} style={{ top: wiggleAlpha * 1 }}> {word}</p>);
                }
                else {
                    lineRenders.push(<p className={"hw " + showBlue + " wiggle"} style={{ top: wiggleBeta * 1 }}> {word}</p>);
                }
            });
        });

        return lineRenders;
    }

    return (
        <div>
            <center className="no-print">
                <h1>DocSpace v2 Automatic WriteUp Maker</h1>
                <textarea onChange={e => setPara(e.target.value)} rows="20" style={{ width: '95%' }}></textarea>

                <h3>VERTICAL ALLIGNMENT</h3>
                <div>
                    <input onChange={e => setAlpha(e.target.checked)} type="checkbox" />
                    <label>Highlight &alpha; words</label><br />
                    <input onChange={e => setBeta(e.target.checked)} type="checkbox" />
                    <label>Highlight &beta; words</label><br />
                </div>
                <div>
                    <label>&alpha; Wiggle Rate ({wiggleAlpha})</label>
                    <input onChange={e => setWiggleAlpha(e.target.value)} type="range" min="1" max="25" value={wiggleAlpha} />
                </div>
                <div>
                    <label>&beta; Wiggle Rate ({wiggleBeta})</label>
                    <input onChange={e => setWiggleBeta(e.target.value)} type="range" min="1" max="25" value={wiggleBeta} />
                </div>

                <h3>HORIZONTAL ALLIGNMENT</h3>
                <div>
                    <label>Left margin wiggle rate ({wiggleLeft})</label>
                    <input onChange={e => setWiggleLeft(e.target.value)} type="range" step="0.01" min="0" max="0.3" value={wiggleLeft} />
                </div>
                <div>
                    <label>Line Drop ({lineDrop})</label>
                    <input onChange={e => setLineDrop(e.target.value)} type="range" min="10" max="300" value={lineDrop} />
                </div>
                <hr />

                <h3>FEATURES</h3>
                <div>
                    <button onClick={() => { window.print(); }}>PDF Preview</button>
                </div>

            </center>

            <div class="preview">
                {para.split('\n').map((line, key) => {
                    return RenderLine(line);
                })}
            </div>

        </div>
    );
}

export default App;
