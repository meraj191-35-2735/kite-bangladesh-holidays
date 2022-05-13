import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mt-2">
      <Card className="border my-3">
        <Card.Body>
          <Card.Title className="text-danger mb-3">
            Difference between authorization and authentication.
          </Card.Title>
          <Card.Text>
            <div className="d-lg-flex  d-sm-block">
              <div className="border rounded py-3 px-2 me-lg-2 mb-lg-2">
                <h6>Authorization: </h6>
                1. In authorization process, person’s or user’s authorities are
                checked for accessing the resources.
                <hr />
                2. In this process, users or persons are validated.
                <hr />
                3. While this process is done after the authentication process.
                <hr />
                4. While it needs user’s privilege or security levels.
                <hr />
                5. While it determines What permission do user have?
              </div>
              <div className="border rounded py-3 px-2">
                <h6>Authentication: </h6>
                1. In authentication process, the identity of users are checked
                for providing the access to the system. <hr /> 2. In
                authentication process, users or persons are verified.
                <hr /> 3. It is done before the authorization process.
                <hr /> 4. It needs usually user’s login details. <hr />
                5. Authentication determines whether the person is user or not.
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="border my-3">
        <Card.Body>
          <Card.Title className="text-danger mb-3">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Title>
          <Card.Text>
            Firebase is a less technical and time-saving alternative to writing
            full-fledged backend code for dynamic apps. You might also want to
            consider leveraging this tool if you eventually wish to host and
            manage your app in the cloud. Being serverless, Firebase removes the
            need to worry about the technicalities of cloud server
            configuration. As a Google Cloud service, it also gives you access
            to other Google products and features, like Google Drive and Sheets.{" "}
            <br />
            With Firebase, it's pretty simple to connect and use built-in
            third-party authentication providers, including Google, Facebook,
            Twitter, among others. And if you want to use a pre-built
            authentication UI, you have it at your disposal as well.All of these
            can save you a significant amount of development cost, as you don't
            need to pay as high as developing from scratch. Firebase pricing is
            equally flexible. Although there are pay-as-you-go services, you can
            start on a free plan and use primary features if your app is still
            at its prime.
            <br />
            The other options we have to implement authentication is given below
            - <br />
            <ul>
              <li>Stytch</li>
              <li>Ory</li>
              <li>Supabase</li>
              <li>Okta</li>
              <li>PingIdentity</li>
              <li>Keycloak etc..</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="border my-3">
        <Card.Body>
          <Card.Title className="text-danger mb-3">
            What other services does firebase provide other than authentication?
          </Card.Title>
          <Card.Text>
            Firebase is a full package that can help in developing your mobile
            or web applications faster with fewer resources and more efficiency.
            Authentication is also a service of google firebase.
            <br /> There are many services without authentication which Firebase
            provides, Most useful of them are:
            <br />
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Predictions </li>
            <li>Cloud Messaging </li>
            <li>Dynamic Links</li>
            <li>Remote Config</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
