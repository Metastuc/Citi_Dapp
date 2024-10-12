import "./top-nav.scss";
import { Link } from "react-router-dom";
import { DashboardIcon, Logo, NavDropDown} from "../../assets/icons/";
// import '@coinbase/onchainkit/styles.css';
import {
    ConnectWallet,
    Wallet,
    WalletDropdown,
    WalletDropdownBasename, 
    WalletDropdownFundLink, 
    WalletDropdownLink, 
    WalletDropdownDisconnect,
  } from '@coinbase/onchainkit/wallet';
  import {
    Address,
    Avatar,
    Name,
    Identity,
    EthBalance, 
  } from '@coinbase/onchainkit/identity';


const TopNav = () => {
    const

        NavbarLink = ({ to, children }) => {
            return (
                <Link to={to}>
                    <span>{children}</span>
                    <span><NavDropDown /></span>
                </Link>
            );
        },

        links = [
            { to: "/", text: "all proposals" },
            { to: "/", text: "all DAO's" },
            { to: "/", text: "delegations" },
        ];



    return (
        <section className="topNav">
            <div>

                <div className="logo">
                    <Link>
                        <span><Logo /></span>
                        <span>citizin</span>
                    </Link>
                </div>

                <nav>
                    {
                        links.map((link, index) => {
                            const { to, text } = link;
                            return (
                                <NavbarLink key={index} to={to}>{text}</NavbarLink>
                            );
                        })
                    }
                </nav>

                <div className="right">
                    <button>
                        <span><DashboardIcon /> </span>
                        <span>dashboard</span>
                    </button>

                    <hr />

                    <div>
                    <Wallet>
  <ConnectWallet>
    <Avatar sizes="1"/>
    <Name />
  </ConnectWallet>
  <WalletDropdown>
    <Identity 
      className="px-4 pt-3 pb-2" 
      hasCopyAddressOnClick
      >
      <Avatar />
      <Name />
      <Address />
      <EthBalance />
    </Identity>
    <WalletDropdownBasename />
    <WalletDropdownLink
      icon="wallet"
      href="https://keys.coinbase.com"
      >
      Wallet
    </WalletDropdownLink>
    <WalletDropdownFundLink />
    <WalletDropdownDisconnect />
  </WalletDropdown>
</Wallet>
                        {/* <span>
                            <img src="/profile_pic.jpg" alt="" />
                        </span>

                        <div>
                            <span>Jehee.eth</span>
                            <span>0x63736hgv393...</span>
                        </div>

                        <span>
                            <NavDropDown />
                        </span> */}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopNav;