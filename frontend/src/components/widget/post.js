import { useState } from "react";
import "./style.css";
import DirectMessage from './components/dm';
import { ScrollPanel } from 'primereact/scrollpanel';

const buttonWidth = 64;
const tabWidth = 300;
const tabHeaders = 
[
    { title: "Details", icon:<i className="bi bi-briefcase-fill h5"></i> },
    { title: "Message", icon:<i className="bi bi-chat-dots-fill h5"></i> },
    { title: "Profile", icon:<i className="bi bi-person-circle h5"></i> }
  ];
const tabContent = [];

export const PostTest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="widget">
      <header>
        {tabHeaders.map((tab, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            key={tab.title}
            className={`material-symbols-outlined ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {tab.icon}
          </button>
        ))}
        <div
          className="underline"
          style={{
            translate: `${activeIndex ? activeIndex * buttonWidth : 0}px 0`,
          }}
        ></div>
      </header>
      <div className="content">
        <div
          className="content-inner"
          style={{
            translate: `-${activeIndex ? activeIndex * tabWidth : 0}px 0`,
          }}
        >
          <div>
          <ScrollPanel style={{ width: '100%', height: '250px' }}  className="custombar2">
            <h2>Home</h2>
            <p>
              This is the tab content, you can put anything you like in here.This is the tab content, you can put anything you like in here.This is the tab contThis is the tab content, you can put anything you like in here.This is the tab content, you can put anything you like in here.ent, you can put anything you like in here.This is the tab content, you can put anything you like in here.This is the tab content, you can put anything you like in here.
            </p>
            </ScrollPanel>
          </div>
          <div>
          <ScrollPanel style={{ width: '100%', height: '250px' }}  className="custombar2">
            <h2>Account</h2>
            <p>
              This is the tab content, you can put anything you like in here.
            </p>
            </ScrollPanel>
          </div>
          <div>
            <ScrollPanel style={{ width: '100%', height: '250px' }}  className="custombar2">
                <h2>Message</h2>
                <DirectMessage />
            </ScrollPanel>
          </div>
        </div>
      </div>
    </article>
  );
};