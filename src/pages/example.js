import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Gallery from '../components/Gallery';

// TODO - move to a GraphQL search for import instead of a native import
import image1Regular from '../assets/images/portfolio/fullsize/1.jpg';
import image1Thumbnail from '../assets/images/portfolio/thumbnails/1.jpg';
import image2Regular from '../assets/images/portfolio/fullsize/2.jpg';
import image2Thumbnail from '../assets/images/portfolio/thumbnails/2.jpg';
import image3Regular from '../assets/images/portfolio/fullsize/3.jpg';
import image3Thumbnail from '../assets/images/portfolio/thumbnails/3.jpg';
import image4Regular from '../assets/images/portfolio/fullsize/4.jpg';
import image4Thumbnail from '../assets/images/portfolio/thumbnails/4.jpg';
import image5Regular from '../assets/images/portfolio/fullsize/5.jpg';
import image5Thumbnail from '../assets/images/portfolio/thumbnails/5.jpg';
import image6Regular from '../assets/images/portfolio/fullsize/6.jpg';
import image6Thumbnail from '../assets/images/portfolio/thumbnails/6.jpg';

const img_set = [
  {
    source: {
      regular: image1Regular,
      thumbnail: image1Thumbnail,
    },
    caption: 'Category - Project Name 1',
    description: 'Project Name 1',
    title: 'Category',
  },
  {
    source: {
      regular: image2Regular,
      thumbnail: image2Thumbnail,
    },
    caption: 'Category - Project Name 2',
    description: 'Project Name 2',
    title: 'Category',
  },
  {
    source: {
      regular: image3Regular,
      thumbnail: image3Thumbnail,
    },
    caption: 'Category - Project Name 3',
    description: 'Project Name 3',
    title: 'Category',
  },
  {
    source: {
      regular: image4Regular,
      thumbnail: image4Thumbnail,
    },
    caption: 'Category - Project Name 4',
    description: 'Project Name 4',
    title: 'Category',
  },
  {
    source: {
      regular: image5Regular,
      thumbnail: image5Thumbnail,
    },
    caption: 'Category - Project Name 5',
    description: 'Project Name 5',
    title: 'Category',
  },
  {
    source: {
      regular: image6Regular,
      thumbnail: image6Thumbnail,
    },
    caption: 'Category - Project Name 6',
    description: 'Project Name 6',
    title: 'Category',
  },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">
              {config.heading}
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">
              {config.subHeading}
            </p>
            <Scroll type="id" element="about">
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </header>

    
    <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-5 fw-semibold">Collapsible</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
          Home
        </button>
        <div class="collapse" id="home-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Overview</a></li>
            <li><a href="#" class="link-dark rounded">Updates</a></li>
            <li><a href="#" class="link-dark rounded">Reports</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Overview</a></li>
            <li><a href="#" class="link-dark rounded">Weekly</a></li>
            <li><a href="#" class="link-dark rounded">Monthly</a></li>
            <li><a href="#" class="link-dark rounded">Annually</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">New</a></li>
            <li><a href="#" class="link-dark rounded">Processed</a></li>
            <li><a href="#" class="link-dark rounded">Shipped</a></li>
            <li><a href="#" class="link-dark rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div class="collapse" id="account-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">New...</a></li>
            <li><a href="#" class="link-dark rounded">Profile</a></li>
            <li><a href="#" class="link-dark rounded">Settings</a></li>
            <li><a href="#" class="link-dark rounded">Sign out</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">We've got what you need!</h2>
            <hr className="divider light my-4" />
            <p className="text-white-50 mb-4">
              Start Bootstrap has everything you need to get your new website up
              and running in no time! Choose one of our open source, free to
              download, and easy to use themes! No strings attached!
            </p>
            <Scroll type="id" element="services">
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#services"
              >
                Get Started!
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider my-4" />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-gem text-primary mb-4"></i>
              <h3 className="h4 mb-2">Sturdy Themes</h3>
              <p className="text-muted mb-0">
                Our themes are updated regularly to keep them bug free!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
              <h3 className="h4 mb-2">Up to Date</h3>
              <p className="text-muted mb-0">
                All dependencies are kept current to keep things fresh.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-globe text-primary mb-4"></i>
              <h3 className="h4 mb-2">Ready to Publish</h3>
              <p className="text-muted mb-0">
                You can use this design as is, or you can make changes!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-heart text-primary mb-4"></i>
              <h3 className="h4 mb-2">Made with Love</h3>
              <p className="text-muted mb-0">
                Is it really open source if it's not made with love?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <Gallery images={img_set} />
    </section>

    <section className="page-section bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">Free Download Gatsby Starter!</h2>
        <a
          className="btn btn-light btn-xl"
          href="https://github.com/anubhavsrivastava/gatsby-starter-creative"
        >
          Download Now!
        </a>
      </div>
    </section>

    <ContactUs />

    <Footer />
  </Layout>
);

export default IndexPage;
