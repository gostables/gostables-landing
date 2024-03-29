import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import USDDSvg from '../components/usddsvg'
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
        image_src="/playground_assets/logox.png"
        image_src1="/playground_assets/logox.png"
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
                <a href="https://app.gostables.org"  target="_blank">
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
              <img src="/playground_assets/hero-image.png"/>
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
                      src="/playground_assets/gTTD.png"
                      className="home-image02"
                    />
                    </div>
                      <img
                        alt="image"
                        src="/playground_assets/gXCD.png"
                        className="home-image01"
                      />
                  </div>
                  <img
                    alt="image"
                    src="/playground_assets/gBBD.png"
                    className="home-image03"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gJMD.png"
                    className="home-image04"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gBSD.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gAWG.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gCUP.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gKYD.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gDOP.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gHTG.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gEUR.png"
                    className="home-image05"
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
                alt="Swap UX"
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
                <span className="home-text37">*+ 0.5% </span>
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
                  Decentralized USD (USDD) is <a href="https://www.thecoinrepublic.com/2022/10/13/tron-gets-legal-tender-in-the-commonwealth-of-dominica/" target="_blank" rel="noreferrer noopener"
                  className="home-link">Legal Tender in  The Commonwealth of Dominica.</a>
                                    <img
                    alt="image"
                    src="/playground_assets/gDOP.png" width="22"
                    className="home-image05"
                  />
                </span><br/><br/>
                <span>
                  USDD is pegged 1:1 with the price of
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
                  src="/playground_assets/btc.png"
                  className="home-image09"
                /><span className="collat-name">BTC</span>
                <img
                  alt="TRX"
                  src="/playground_assets/trx.png"
                  className="home-image10"
                /><span className="collat-name">TRX</span>
                <img
                  alt="USDT"
                  src="/playground_assets/usdt.png"
                  className="home-image11"
                /><span className="collat-name">USDT</span>
                <img
                  alt="USDC"
                  src="/playground_assets/usdc.png"
                  className="home-image12"
                /><span className="collat-name">USDC</span>
                <img
                  alt="TUSD"
                  src="/playground_assets/tusd.png"
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
              <USDDSvg></USDDSvg>

            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-image-container3">
              <img
                alt="Vaults UX"
                src="/playground_assets/vaults-ux.jpg"
                className="home-image08"
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
                  <span className="home-text70">Up to 80%</span>
                  <span>
                    {' '}
                    of the protocol&apos;s fees are distributed to gStable Vault users in gStables.
                  </span>
                  <br></br>
                  <br></br>
                  <span>More Vaults with benefits coming soon!</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <a href="https://app.gostables.org/"  target="_blank"><button className="home-button2 button">Launch App</button></a>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text40">
                <span className="home-text41">Wallet</span>
                <span> Balances</span>

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
                  View your gStables and Vault deposits in a simple, unified view.
                </span>
                <br></br>
                <span>
                </span>
                <br></br>
              </span>
              <div className="home-container10">

              </div>
                <a href="https://app.gostables.org/"  target="_blank"><button className="home-button2 button">Launch App</button></a>
            </div>
            <div className="home-image-container2 wallet-ux">
              <img alt="Wallet UX" src="/playground_assets/wallet-ux.png"/>

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
        <div className="home-section-four section-container">
          <div className="home-max-width5 max-content-container">
            <h2 id="media"className="home-text91">
              <span className="home-text93">Media</span>
            </h2>
          </div>
            <span className="home-text97">
              <a target="_blank" href="https://forum.trondao.org/t/the-tron-grand-hackathon-season-3-winners-announcement/16091">Tron Grand Hackathon Season 3 - DeFi 5th Place</a>
              <div className="row">
                <div className="column">
                  <a target="_blank" href="https://trondao.org/hackathon/projects/defi-5th-place-gostables-by-gostables/">
                    <img src="/playground_assets/tron-trx-logo-full.svg"></img>
                  </a>
                </div>
                <div className="column pt-27">
                  <a target="_blank" href="https://devpost.com/software/gostables">
                    <img src="/playground_assets/devpost-logo.svg"></img>
                  </a>
                </div>
                <div className="column w-180">
                  <a target="_blank" href="https://cointelegraph.com/press-releases/tron-grand-hackathon-2022-season-3-winners-announced">
                    <img src="/playground_assets/cointelegraph-logo.png"></img>
                  </a>
                </div>
              </div>
            </span>
        </div>
        <div className="home-section-five section-container">
          <div className="home-banner">
            <h1 id="community" className="home-text94">
              <span>Join</span>
              <span className="home-text95"> The Community</span>
            </h1>
            <span className="home-text97">
              Become part of this journey. Let&apos;s see where we can take this
              together.
            </span>
            <div className="home-btn-group">
              <a href="https://app.gostables.org"  target="_blank"><button className="home-button3 button">Launch App</button></a>
              <a href="https://docs.gostables.org/"  target="_blank"><button className="home-button4 button">Docs</button></a>
              <a href="https://t.me/gostables"  target="_blank"><button className="home-button5 button">Telegram</button></a>
              <a href="https://twitter.com/gostables"  target="_blank"><button className="home-button6 button">Twitter</button></a>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
