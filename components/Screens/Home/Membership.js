import React from 'react';
import MembershipCards from './MembershipCards';
import membershipStyles from '../../../styles/Screens/Home/Membership.module.css';
import Spacer from './../../Layout/Spacer';

const Membership = ({ data, id }) => {
  return (
    <div id={id} className="section bg-blue800 c-light">
      <div className={membershipStyles.member}>
        <div>
          <h2 style={{
            textAlign: 'center'
          }}>Why Become a Member?</h2>
          <MembershipCards data={data} />
        </div>
        <Spacer h="100px" />
        <div className={membershipStyles.join}>
          <div className={membershipStyles.text}>
            <div className={membershipStyles.title}>
              <img src="/assets/icons/home-member-discord.png" alt="Discord Icon" />
              <h2>Join DoCoNation</h2>
            </div>
            <p>
              Discord is a Platform just like Whatsapp, or Instagram, where people connect together, and
              essentially form communities on!
						</p>
            <div className={membershipStyles.btnHolder}>
              <a href="https://doco.link/nation" target='_blank' className={membershipStyles.btn + ' btn btn-primary'}>
                Become a Member
							</a>
              <a href="https://doco.link/discord" target='_blank' className="btn btn-sec">
                Join Discord
							</a>
            </div>
          </div>
          <div className={membershipStyles.img + ' d-flex'}>
            <img src="/assets/images/home-member-join.png" alt="Join DoCoNation" />
          </div>
        </div>
        <Spacer h="100px" />
        <div className={membershipStyles.getNotified}>
          <h2>
            Get Notified On <span className='c-yellow'>Your Favorite Apps</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis.</p>
          <div className={membershipStyles.icons}>
            <a href="https://doco.link/nation-whatsapp" target='_blank'>
              <img src="/assets/icons/whatsapp.png" alt="DoCoNation WhatsApp" className={membershipStyles.icon} />
            </a>
            <a href="https://doco.link/nation-telegram" target='_blank'>
              <img src="/assets/icons/telegram.png" alt="DoCoNation Telegram" className={membershipStyles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
