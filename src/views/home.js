import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div id="home" className="home-container">
      <Helmet>
        <title>goStables</title>
        <meta property="og:title" content="goStables" />
      </Helmet>
      <Navbar
        image_src="/playground_assets/gostables-logo-alt-1500h.png"
        image_src1="/playground_assets/gostables-logo-alt-1500h.png"
        rootClassName="navbar-root-class-name"
      ></Navbar>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">
                <span className="home-text02">Stablecoins</span>
                <span> For The Caribbean</span>
              </h1>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Transact in local and regional stablecoins on the Tron
                    Blockchain
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon2"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text05">
                    Accept gTTD, gXCD, gBBD, gJMD & more, online or in the real world
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon4"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text06">
                    Exchange your gStables for USDD anytime
                  </span>
                </div>
              </div>
              <div className="home-input-container">
                <a href="#">
                  <button className="home-button button-primary button">
                    Get started
                  </button>
                </a>
                <a href="https://docs.gostables.org/">
                  <button className="home-button1 button-primary button">
                    How it Works
                  </button>
                </a>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/hero%20image-500w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text07">$6,000,789</h1>
            <span className="home-text08">Total Volume</span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text09">$4,693,089</h1>
            <span className="home-text10">Total Supply</span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text11">990,023</h1>
            <span className="home-text12">Transactions</span>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2  id="protocol" className="home-text13">
              <span className="home-text14">
                Accelerating economic growth &amp; inclusion
              </span>
              <br className="heading2"></br>
              <span className="heading2">
                with collateral backed stablecoins
              </span>
              <br className="heading2"></br>
            </h2>
            <div className="home-container01">
              <div className="home-container02">
                <div className="home-container03">
                  <div className="home-container04">
                    <div className="home-container05">
                    <img
                      alt="image"
                      src="/playground_assets/gttd-200h.png"
                      className="home-image02"
                    />
                    </div>
                      <img
                        alt="image"
                        src="/playground_assets/gxcd-200h.png"
                        className="home-image01"
                      />
                  </div>
                  <img
                    alt="image"
                    src="/playground_assets/gbbd-200h.png"
                    className="home-image03"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gjmd-200h.png"
                    className="home-image04"
                  />
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/swap-ux.jpg"
                className="home-image08"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text19">
                <span className="heading2">Introducing</span><br/>
                <span className="home-text23 heading2">g</span>
                <span className="home-text24">Stables</span>
              </h1>
              <span className="home-text25">
                <span>
                  gStables are decentralized stablecoins on the Tron Blockchain,
                  tracking the price of real-world currencies. Powered by the
                  goStables Protocol.
                </span>
                <br></br>
                <br></br>
                <span>gStables are over-collateralized with USDD.</span>
                <br></br>
                <br></br>
                <span>
                  gStables can be swapped from/to USDD anytime, at their
                  real-world exchange rate
                </span>
                <span className="home-text33">*</span>
                <br></br>
                <br></br>
                <br></br>
                <span className="home-text37">*+ 0.3% </span>
                <span className="home-text38">Protocol fee</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text40">
                <span className="home-text41">Over-collateralized</span>
                <span> with USDD</span>

              </h1>
              <div className="home-container06">
                <div className="home-container07">
                  <div className="home-container08">
                    <div className="home-container09"></div>
                  </div>
                </div>
              </div>
              <span className="home-text43">
                <span>
                  US Decentralized Dollar (USDD) is pegged 1:1 with the price of
                  USD and is over-collateralized with a basket of crypto assets
                  including:
                </span>
                <br></br>
                <span>
                </span>
                <br></br>
              </span>
              <div className="home-container10">
                <img
                  alt="BTC"
                  src="/playground_assets/btc-200h.png"
                  className="home-image09"
                /><span className="collat-name">BTC</span>
                <img
                  alt="TRX"
                  src="/playground_assets/trx-200h.png"
                  className="home-image10"
                /><span className="collat-name">TRX</span>
                <img
                  alt="USDT"
                  src="/playground_assets/usdt-200h.png"
                  className="home-image11"
                /><span className="collat-name">USDT</span>
                <img
                  alt="USDC"
                  src="/playground_assets/usdc-200w.png"
                  className="home-image12"
                /><span className="collat-name">USDC</span>
                <img
                  alt="TUSD"
                  src="/playground_assets/tusd-200h.png"
                  className="home-image13"
                /><span className="collat-name">TUSD</span>
              </div>
              <span className="home-text48">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  USDD can be swapped for other popular crypto assets and
                  stablecoins anytime, across multiple blockchains.
                </span>
                <br></br>
                <br></br>
                <a
                  href="https://tdr.org"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  Learn more about TronDAO Reserve &gt;
                </a>
                <br></br>
              </span>
            </div>
            <div className="home-image-container2">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1600 1666"
                  {...props}
                >
                  <defs>
                    <style>{".cls-2{fill:#fff}"}</style>
                  </defs>
                  <circle cx={782.51} cy={833.67} r={748.5} fill="#216c58" />
                  <path
                    className="cls-2"
                    d="M1447.55 867.67a14 14 0 00-14 13c-24.28 339.68-310.26 605.76-651.08 605.76s-626.76-266.09-651.04-605.77a14 14 0 00-27.95 2 681 681 0 001306.27 216 675.55 675.55 0 0051.78-216 14 14 0 00-14-15zM117.46 799.67a14.05 14.05 0 0014-13C155.71 447 441.69 180.92 782.5 180.92S1409.3 447 1433.58 786.67a14 14 0 0028-2 681 681 0 00-1306.27-216 675.5 675.5 0 00-51.78 216 14 14 0 0014 15z"
                  />
                  <path
                    className="cls-2"
                    d="M879.88 821.68c-19.09-5.52-39.17-10.61-60.08-15.44q-14.09-3.25-28.66-6.38c-2.79-.58-5.51-1.17-8.16-1.75-25.33-5.56-45-11.06-60.09-17-33-13-44-28.1-44-50.35 0-23.08 17.66-40 44-50.23 17.16-6.64 38-10.42 60.09-11.16 2.71-.1 5.43-.14 8.16-.14 9.93 0 19.48.47 28.66 1.35a285 285 0 0160.08 12.3c66.16 21.23 101.28 59.76 101.28 59.76l75.57-136c-53.85-49.61-122.61-72.78-176.85-83.55a500.2 500.2 0 00-60.08-8.2c-12.59-.93-21.84-1.1-26.49-1.1q-5.2 0-10.33.13a397 397 0 00-60.09 5.82C585.53 544 506.13 639.33 506.13 749.12c0 109.52 69.37 176.1 216.76 213.47Q751 969.73 783 975.47c2.7.5 5.42 1 8.16 1.45 10.36 1.76 19.89 3.59 28.66 5.49 26.5 5.75 46 12.17 60.08 19.55 24 12.57 32.18 27.89 32.18 47.29 0 21-9.3 39.11-32.18 51.48-14.33 7.75-34 13.27-60.08 15.89-11.09 1.12-23.34 1.71-36.82 1.72h-.47a252.39 252.39 0 01-59.62-7.45C672.63 1098.66 615 1070 559 1014.7l-78.82 138.18s92 95.39 242.67 116.72a424.23 424.23 0 0059.62 4.2h.53q19 0 36.82-1.28a441 441 0 0060.08-8.22c133.84-28.16 204.91-116.13 204.91-225.85-.02-126.9-82.01-181.15-204.93-216.77z"
                  />
                  <rect
                    className="cls-2"
                    x={550.39}
                    y={358}
                    width={522.34}
                    height={61.05}
                    rx={30.53}
                  />
                  <path
                    className="cls-2"
                    d="M783 447.16v57a408.17 408.17 0 00-60.09 5.64v-62.64zM722.89 519.71a397 397 0 0160.11-5.82v274.29c-26.67-5.93-46.09-11.64-60.09-17.52zM783 798.11v310.53h-.47a246 246 0 01-59.62-7.67V781.11c15.09 5.94 34.74 11.44 60.09 17zM782.51 1118.34h.49v192.28a30 30 0 11-60.09 0v-199.73a252.39 252.39 0 0059.6 7.45zM879.88 447.16v66a505.72 505.72 0 00-60.08-8v-58zM819.8 514.86a500.2 500.2 0 0160.08 8.2v288.51c-19.67-5.64-39.83-10.65-60.08-15.29zM879.88 821.68v267.72q-20.64 13.42-60.08 17.49V806.24c20.91 4.83 40.99 9.92 60.08 15.44zM819.8 1116.62c26.07-2.62 45.75-8.14 60.08-15.89v209.89a30 30 0 11-60.08 0z"
                  />
                </svg>

            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-image-container3">
              <img
                alt="image"
                src="/playground_assets/vaults-ux.jpg"
                className="home-image15"
              />
            </div>
            <div className="home-container11">
              <div className="home-content-container3">
                <h1 className="home-text55">
                  <span className="heading2">Earn with</span>
                  <br className="heading2"></br>
                  <span className="home-text59 heading2">g</span>
                  <span className="home-text60">Stable Vaults</span>
                </h1>
                <span className="home-text61">
                  <span>Support your favourite gStable by adding USDD to gStable Vaults, freezing it for 72 hours.</span>
                  <br></br>
                  <br></br>
                  <span className="home-text70">40%</span>
                  <span>
                    {' '}
                    of the protocol&apos;s fees are distributed to gStable Vault users in gStables.
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <a href="https://app.gostables.org/"><button className="home-button2 button">Launch App</button></a>
            </div>
          </div>
        </div>
        <div className="home-features">
          <h1 className="home-text84">
            <span className="home-text85">Use Cases</span>
            <span> </span>
            <span className="home-text87">at a glance</span>
          </h1>
          <div className="home-container12">
            <FeatureCard
              title="Buy and Sell"
              description="Buy gStables with their fiat equivalent and sell them back to fiat"
              rootClassName="rootClassName"
            ></FeatureCard>
            <FeatureCard
              title="Exchange"
              description="Trade gStables for any other crypto asset with little to no price impact"
              rootClassName="rootClassName3"
            ></FeatureCard>
            <FeatureCard
              title="Payment and Remittance"
              description="Send to anyone,  accept gStables for new and existing products/services - boosting local and inter-regional commerce"
              rootClassName="rootClassName2"
            ></FeatureCard>
            <FeatureCard
              title="Build and Earn"
              description="Use gStable Vaults to kickstart online businesses and earn as the protocol grows"
              rootClassName="rootClassName1"
            ></FeatureCard>
            <FeatureCard
              title="Liquidity Provisioning"
              description="Expand your liquidity depth by pairing gStables with other stablecoins and crypto assets in localised markets"
              rootClassName="rootClassName1"
            ></FeatureCard>
            <FeatureCard
              title="Decentralized Banking"
              description="Integrate gStables with other onchain protocols to enable sustainable yield generation"
              rootClassName="rootClassName1"
            ></FeatureCard>
          </div>
          <span className="home-text88">
            <span className="home-text89">Limitless</span>
            <span> Possibilites...</span>
          </span>
        </div>
        <div className="home-section-four section-container">
          <div className="home-max-width5 max-content-container">
            <h2 id="vision"className="home-text91">
              <span>Our </span>
              <span className="home-text93">Vision</span>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name2"></Slide>
          </div>
        </div>
        <div className="home-section-five section-container">
          <div className="home-banner">
            <h1 id="community" className="home-text94">
              <span className="home-text95">Join</span>
              <span> The Community</span>
            </h1>
            <span className="home-text97">
              Become part of this journey. Let&apos;s see where we can take this
              together.
            </span>
            <div className="home-btn-group">
              <a href="#"><button className="home-button3 button">Launch App</button></a>
              <a href="https://github.com/gostables"><button className="home-button4 button">Github</button></a>
              <a href="https://t.me/gostables"><button className="home-button5 button">Telegram</button></a>
              <a href="https://twitter.com/gostables"><button className="home-button6 button">Twitter</button></a>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
