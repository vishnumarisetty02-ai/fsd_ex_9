import UserProfile from "./UserProfile";

function Parent({ name, email, course }) {
  return (
    <div className="parent-box">

      <h3>Parent Component</h3>

      <p>Data received from App and passed to Child.</p>

      <UserProfile
        name={name}
        email={email}
        course={course}
      />

    </div>
  );
}

export default Parent;