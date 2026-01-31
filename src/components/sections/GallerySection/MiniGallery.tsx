
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { galleryData } from '../../../data/gallery/galleryData';

const MiniGallery: React.FC = () => {
    const { textoBotao, linkBotao, previewImages } = galleryData;

    return (
        <div className="py-4">
            <Container>
                <Row className="g-2 justify-content-center">
                    {previewImages.map((img) => (
                        <Col key={img.id} xs="auto">
                            <div style={{
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
                                width: '80px',
                                height: '80px',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease'
                            }}
                                className="hover-scale"
                            >
                                <img
                                    src={img.src.startsWith('/') || img.src.startsWith('http')
                                        ? img.src
                                        : `/assets/images/${img.src.includes('/')
                                            ? img.src
                                            : 'gallery/' + img.src}`}
                                    alt={img.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-4">
                    <Link
                        to={linkBotao}
                        className="btn btn-outline-primary px-4 py-2 rounded-pill"
                        style={{ fontWeight: '600' }}
                    >
                        {textoBotao} <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default MiniGallery;
