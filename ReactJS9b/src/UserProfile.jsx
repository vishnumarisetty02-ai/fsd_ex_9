function UserProfile({ name, email, course }) {
  return (
    <div className="user-box">
      <h3>User Profile</h3>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
}

export default UserProfile;