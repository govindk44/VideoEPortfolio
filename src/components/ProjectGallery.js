import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./ProjectGallery.css";
import myimage from "../assets/NEO.jpg";
import image from "../assets/CREATEDITOR.jpg";
import rcb from "../assets/rcb.jpg";
import pix from "../assets/1.jpg";
import pix1 from "../assets/2.jpg";
import pix2 from "../assets/3.jpg";
import nirthumb from "../assets/NIRTHUMB.jpg";
import logo from "../assets/logo.jpg";
import wed from "../assets/img.jpg";

function ProjectGallery() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState("all");
  const [showVideoId, setShowVideoId] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  // Store refs for each video
  const videoRefs = useRef({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleVideoToggle = (id) => {
    // Pause and reset any currently playing video
    if (showVideoId && videoRefs.current[showVideoId]) {
      const vid = videoRefs.current[showVideoId];
      vid.pause();
      vid.currentTime = 0;
    }
    setShowVideoId((prev) => (prev === id ? null : id));
  };

  const projects = [
    {
      id: 1,
      title: "Real Estate Reel",
      category: "corporate",
      client: "VISHAL CONSTRUCTION BIDAR",
      tools: ["Premiere Pro"],
      description:
        "A dynamic brand video showcasing company values and innovation.",
      duration: "0:36",
      thumbnail: logo,
      youtube: "MuWMCZFAynI",
    },
    {
      id: 2,
      title: "HOME INTERIOR VIDEO",
      category: "corporate",
      client: "VISHAL CONSTRUCTION BIDAR",
      tools: ["Premiere Pro"],
      description:
        "A dynamic brand video showcasing company values and innovation.",
      duration: "3:03",
      thumbnail: logo,
      youtube: "dzuN5-o6sVE",
    },
    {
      id: 3,
      title: "Music Video:RCB RAP COVER BY MC MAX",
      category: "music",
      client: "Madan Kumar",
      tools: ["Premiere Pro"],
      description:
        "Cinematic music video with creative visual effects and color grading.",
      thumbnail: rcb,
      youtube: "yA3QHSUUxcU",
    },
    {
      id: 4,
      title: "Instagram Reels Series",
      category: "social",
      client: "raghu_kulkarni07",
      tools: ["Premiere Pro"],
      description: "Trendy vertical videos optimized for social media.",
      duration: "0:30",
      thumbnail: image,
      youtube: "gW8lwQp_3_0",
    },
    {
      id: 5,
      title: "CreatEditor YT Channel",
      category: "social",
      client: "Mahantesh Badiger",
      tools: ["YouTube"],
      description: "Visit my YouTube channel for more creative video content.",
      thumbnail: image,
      link: "https://www.youtube.com/@mahanteshbadiger6819",
    },
    {
      id: 6,
      title: "Wedding TEASER *",
      category: "wedding",
      client: "AMEER PHOTOGRAPHY BENGALORE",
      tools: ["Premiere Pro"],
      description: "Visual storytelling that speaks beyond words.",
      duration: "0:56",
      thumbnail: wed,
      youtube: "aaoEcJ0jFzo",
    },
    {
      id: 7,
      title: "Wedding TEASER **",
      category: "wedding",
      client: "Yuga Pictures,Tumakuru",
      tools: ["Premiere Pro"],
      description: "Turning raw moments into timeless memories.",
      duration: "1:37",
      thumbnail: nirthumb,
      youtube: "boPpx2onbBc",
    },
    {
      id: 8,
      title: "Wedding TEASER ***",
      category: "wedding",
      client: "NEO WEDS,HUBBALLI",
      tools: ["Premiere Pro"],
      description: "Crafted with emotion, edited with love.",
      duration: "1:15",
      thumbnail: myimage,
      video:
        "https://res.cloudinary.com/dymj4wfdr/video/upload/v1752417250/video2_zqs54y.mp4",
    },
    {
      id: 9,
      title: "PRE WEDDING TEASER",
      category: "pre wed",
      client: "ANARGHYA PORTRAITURES,TUMAKURU",
      tools: ["Premiere Pro"],
      description: "A timeless story. Cinematically crafted.",
      duration: "1:03",
      thumbnail: pix1,
      video:
        "https://res.cloudinary.com/dymj4wfdr/video/upload/v1752417256/SAMPLE_eazgek.mp4",
    },
    {
      id: 10,
      title: "PRE WEDDING TEASER",
      category: "pre wed",
      client: "AMEER PHOTOGRAPHY BENGALORE",
      tools: ["Premiere Pro"],
      description: "Emotion meets precision.",
      duration: "1:12",
      thumbnail: pix,
      video:
        "https://res.cloudinary.com/dymj4wfdr/video/upload/v1752417243/SAMPLE_1_lqtnhu.mp4",
    },
    {
      id: 11,
      title: "PRE WEDDING TEASER",
      category: "pre wed",
      client: "AMEER PHOTOGRAPHY BENGALORE",
      tools: ["Premiere Pro"],
      description: "Precision. Emotion. Storytelling.",
      duration: "1:11",
      thumbnail: pix2,
      video:
        "https://res.cloudinary.com/dymj4wfdr/video/upload/v1752417226/video1_msq9kp.mp4",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "pre wed",
      name: "Prewedding",
      count: projects.filter((p) => p.category === "pre wed").length,
    },
    {
      id: "wedding",
      name: "Wedding",
      count: projects.filter((p) => p.category === "wedding").length,
    },
    {
      id: "music",
      name: "Music Videos",
      count: projects.filter((p) => p.category === "music").length,
    },
    {
      id: "corporate",
      name: "Corporate",
      count: projects.filter((p) => p.category === "corporate").length,
    },
    {
      id: "social",
      name: "Social Media",
      count: projects.filter((p) => p.category === "social").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div
          className={`projects-content ${inView ? "animate-fade-in-up" : ""}`}
        >
          <div className="projects-header">
            <h2 className="section-title text-center">
              Project <span className="gradient-text">Gallery</span>
            </h2>
            <p className="projects-subtitle text-center">
              Explore my diverse portfolio of video editing projects across
              various industries and styles.
            </p>
          </div>

          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${
                  activeFilter === category.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}{" "}
                <span className="count">({category.count})</span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-thumbnail">
                  <div className="thumbnail-placeholder">
                    {showVideoId === project.id ? (
                      project.video ? (
                        <video
                          controls
                          src={project.video}
                          style={{ width: "100%", height: "100%", borderRadius: "12px", objectFit: "cover" }}
                          ref={el => { videoRefs.current[project.id] = el; }}
                          autoPlay
                        />
                      ) : project.youtube ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${project.youtube}?autoplay=1`}
                          title={project.title}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          style={{ width: "100%", height: "100%", borderRadius: "12px" }}
                        />
                      ) : null
                    ) : (
                      <>
                        <img
                          src={project.thumbnail}
                          srcSet={`${project.thumbnailSmall} 480w, ${project.thumbnail} 800w`}
                          sizes="(max-width: 600px) 480px, 800px"
                          alt={project.title}
                          onLoad={() => handleImageLoad(project.id)}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "12px",
                            background: loadedImages[project.id] ? "none" : "#eee"
                          }}
                        />
                        {!loadedImages[project.id] && <div className="skeleton-loader" />}
                        <div
                          className="play-overlay"
                          onClick={() => handleVideoToggle(project.id)}
                        >
                          ▶ Play
                        </div>
                        {project.duration && (
                          <div className="project-duration">
                            {project.duration}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-details">
                    <div className="project-client">
                      <strong>Client:</strong> {project.client}
                    </div>
                    <div className="project-tools">
                      <strong>Tools:</strong>
                      <div className="tools-list">
                        {project.tools.map((tool) => (
                          <span key={tool} className="tool-tag">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="project-actions">
                    <a
                      href={project.link || "#"}
                      className="btn-small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
