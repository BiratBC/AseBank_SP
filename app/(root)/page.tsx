import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
    const loggedIn = { firstName : "Birat" , lastName : "BC", email : "birat45@gmail.com"};
    return (
        <>
      <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type = "greeting"
                title = "Welcome"
                user = {loggedIn ?.firstName || 'Guest'}
                subtext = "Access and manage your account and transactions efficiently"
                />
                <TotalBalanceBox
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance = {2783.23}                
                />
            </header>

            RECENT TRANSACTION
        </div>
        <RightSidebar
        user = {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance : 123123},{currentBalance : 345345.3454}]}        
        />
      </section>
    </>
  );
};

export default Home;
