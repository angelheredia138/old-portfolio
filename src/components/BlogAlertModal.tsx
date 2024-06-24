// BlogAlertModal.tsx
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface BlogAlertModalProps {
  theme: string;
}

const BlogAlertModal: React.FC<BlogAlertModalProps> = ({ theme }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem("visited");
    if (isFirstVisit) {
      setShow(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>NEW BLOG PAGE!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Check out my latest updates and blog posts{" "}
        <Link to="/blog" className={`alert-link ${theme}`}>
          here
        </Link>
        !
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={theme === "body-dark-mode" ? "light" : "secondary"}
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BlogAlertModal;
