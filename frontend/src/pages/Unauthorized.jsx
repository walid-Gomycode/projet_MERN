
const Unauthorized = () => {
  return (
    <div style={{minHeight: "100vh"}}>
        <h1>Access Denied</h1>
      <img
        src="https://media.istockphoto.com/id/2178302901/photo/digital-security-concept-with-glass-padlock-3d-icon-on-an-abstract-digital-surface.jpg?s=2048x2048&w=is&k=20&c=7HDhFYY-hpeegA_xkiM7bSZjNb3cvZsaXwOlxEOQnRM="
        alt="Access denied"
        height={500}
        width={500}
      />

      <p>You do not have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
