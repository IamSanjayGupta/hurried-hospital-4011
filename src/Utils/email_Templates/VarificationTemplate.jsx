export const VarificationTemplate = ({ to, link }) => {
  return `<div style="color: #4f4e4e">
      <h2>Hello User,</h2>
      <p>
        Thank you for signing up to Indeed! We're excited to have you onboard and will be happy to
        help you set everything up. <br />
        Please confirm your email (${to}) by clicking the button below.
      </p>
      <br />
      <a
        style="
        border: none;
        border-radius: 2px;
        box-shadow: 0 2px 5px 0 #d6d6d6;
        text-decoration: none;
        padding: 10px 20px;
        color: white;
        font-weight: bold;
        background: #2557a7;
        margin-left: 2rem;
      "
        href=${link}
        target="_blank"
      >
        Confirm
      </a>
      <br />
      <br />
      <p>This link will expire in 24 hours.</p>
      <p style="color: #191818; font-weight: 500">
        Best wishes,
        <br />
        Indeed Team
      </p>
    </div>`;
};
