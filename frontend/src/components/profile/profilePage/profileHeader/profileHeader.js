import React from 'react';
import './styles.css';
import { TabView, TabPanel } from 'primereact/tabview';
import ProfilePage from '../profilePage';

function ProfileHeader() {
  
	return (
		<div>
			<div className="bg-white">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center ">
                    <div>
                        <a href="#/" className="d-inline-block text-dark">
                        <strong>234</strong>
                        <span className="text-muted">followers</span>
                        </a>
                        <a href="#/" className="d-inline-block text-dark ml-3">
                        <strong>111</strong>
                        <span className="text-muted">following</span>
                        </a>
                    </div>
                    <div>
                        <a href="#/" className="btn btn-success btn-sm">
                        Follow
                        </a>
                        <a href="#/" className="btn btn-default icon-btn md-btn-flat btn-sm ml-1">
                        <i className="ion ion-md-mail"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <hr className="m-0"/>

                <div className="container">
                    <div className="text-center py-5">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt='' className="ui-w-100 rounded-circle"/>

                    <div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
                        <h4 className="font-weight-bold my-4">Mike Greene</h4>

                        <div className="text-muted mb-4">
                        Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#/" className="btn icon-btn borderless btn-outline-twitter btn-lg btn-round">
                        <span className="ion ion-logo-twitter"></span>
                        </a>
                        <a href="#/" className="btn icon-btn borderless btn-outline-facebook btn-lg btn-round">
                        <span className="ion ion-logo-facebook"></span>
                        </a>
                        <a href="#/" className="btn icon-btn borderless btn-outline-instagram btn-lg btn-round">
                        <span className="ion ion-logo-instagram"></span>
                        </a>
                    </div>
                    </div>
                </div>
                <TabView >
                    <TabPanel header="Posts" rightIcon="pi pi-calendar mr-2">
                        < ProfilePage />
                    </TabPanel>
                    <TabPanel header="Header II" rightIcon="pi pi-user ml-2">
                        <p className="m-0">
                            Sed ut perspiciatis unde 
                        </p>
                    </TabPanel>
                    <TabPanel header="Header III" rightIcon="pi pi-cog ml-2">
                        <p className="m-0">
                            At vero eos 
                        </p>
                    </TabPanel>
                </TabView>
                

            </div>
		</div>
	);
}
export default ProfileHeader;