import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';

import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import backgroundNeon from '../assets/BackgroundHomePageYouth4.png';
import backgroundNeonNight3 from '../assets/BackgroundHomePageYouthNightMode3.png';

const AboutPage = () => {
  const { themeName } = useTheme();
  const { nightMode } = useSettings();

  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId, event) => {
    if (event) {
      event.stopPropagation(); // Prevent event bubbling
      event.preventDefault(); // Prevent default behavior
    }
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleSubsectionClick = (sectionId, event) => {
    event.stopPropagation(); // Prevent event bubbling to parent
    event.preventDefault(); // Prevent default behavior
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const pageStyle = {
    minHeight: '100vh',
    background: themeName === 'neon' 
      ? (nightMode ? `url(${backgroundNeonNight3})` : `url(${backgroundNeon})`)
      : themeName === 'zwartWit'
      ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)'
      : 'linear-gradient(135deg, #2c1810 0%, #3d2318 50%, #4a2c1f 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
    background: themeName === 'neon' 
      ? 'linear-gradient(45deg, #8b5cf6, #a855f7, #d946ef)'
      : 'linear-gradient(45deg, #ffffff, #f0f0f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const sectionStyle = {
    marginBottom: '0.5rem',
    padding: '1rem',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  };

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    textAlign: 'justify',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000'
  };



  const expandIconStyle = {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease',
    color: '#000000'
  };

  const contentStyle = {
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    minHeight: '0px'
  };

  return (
    <div style={pageStyle}>
      <Header />
      <main style={{ padding: '2rem 0' }}>
        <div style={containerStyle}>

          <div 
            style={{
              ...sectionStyle,
              cursor: 'pointer'
            }}
            onClick={(e) => toggleSection('process', e)}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%',
              userSelect: 'none'
            }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ ...sectionTitleStyle, margin: 0, textAlign: 'left', color: '#000000' }}>Process Behind the Wheels of Islam</h2>
              </div>
              <span style={{
                ...expandIconStyle,
                marginLeft: '1rem'
              }}>
                {expandedSections['process'] ? '-' : '+'}
              </span>
            </div>
            <div style={{
              ...contentStyle,
              maxHeight: expandedSections['process'] ? 'none' : '0px', userSelect: 'text',
              opacity: expandedSections['process'] ? 1 : 0,
              marginTop: '1rem'
            }}>
              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('overview', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '100%',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, fontSize: '1.3rem', marginBottom: '1rem', margin: 0 }}>Overview of the Steps</h3>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['overview'] ? '-' : '+'}
                  </span>
                </div>
                <div style={{
                  ...contentStyle,
                  maxHeight: expandedSections['overview'] ? 'none' : '0px', userSelect: 'text',
                  opacity: expandedSections['overview'] ? 1 : 0,
                  marginTop: '1rem'
                }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#000000' }}>1. Curriculum comparison of Islamic universities</h4>
                    <p style={{ marginBottom: '1rem', color: '#000000' }}>
                      We analyzed syllabi and course structures from major Islamic universities worldwide to understand 
                      the traditional academic approach to Islamic education. This included institutions like Al-Azhar 
                      University, IIUM, Islamic University of Madinah, and others to identify recurring themes and 
                      disciplinary patterns in Islamic studies.
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#000000' }}>2. Research into the lived experiences of youth (ages 13–18)</h4>
                    <p style={{ marginBottom: '1rem', color: '#000000' }}>
                      Grounded in developmental psychology (Erikson, Piaget, Kohlberg), we researched the actual 
                      experiences and needs of Muslim youth. This involved understanding their psychological development, 
                      spiritual struggles, and the unique challenges they face in navigating identity, purpose, and 
                      belonging in contemporary society.
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#000000' }}>3. Thematic structuring of "Wheels" based on inward/outward focus</h4>
                    <p style={{ marginBottom: '1rem', color: '#000000' }}>
                      We organized the traditional Islamic curriculum into four thematic "Wheels" based on their 
                      orientation: outward-focused (knowledge, history, law) and inward-focused (spirituality, 
                      purification). This created a framework that balances academic learning with spiritual development.
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#000000' }}>4. Mapping of topics and needs to guided flows</h4>
                    <p style={{ marginBottom: '1rem', color: '#000000' }}>
                      Finally, we mapped specific topics from the Wheels to the identified youth needs, creating 
                      guided flows that address real psychological and spiritual challenges. This ensures that 
                      traditional Islamic knowledge is presented in ways that directly serve youth development.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('step1', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '100%'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, fontSize: '1.3rem', marginBottom: '1rem', margin: 0 }}>1. Curriculum Comparison of Islamic Universities</h3>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['step1'] ? '-' : '+'}
                  </span>
                </div>
                <div style={{
                  ...contentStyle,
                  maxHeight: expandedSections['step1'] ? 'none' : '0px', userSelect: 'text',
                  opacity: expandedSections['step1'] ? 1 : 0,
                  marginTop: '1rem'
                }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#000000' }}>1. Curriculum Comparison of Islamic Universities</h4>
                    <p style={{ marginBottom: '1rem', color: '#000000' }}>
                      We analyzed syllabi and course structures from institutions such as:
                    </p>
                    <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Al-Azhar University (Egypt)</li>
                      <li style={{ marginBottom: '0.5rem' }}>IIUM (Malaysia)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Islamic University of Madinah (Saudi Arabia)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Darul Uloom Deoband (India)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Qarawiyyin University (Morocco)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Umm al-Qura University (Makkah)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Zitouna University (Tunisia)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Istanbul 29 Mayıs University (Turkey)</li>
                    </ul>
                    <p style={{ marginBottom: '1rem' }}>
                      Based on these, we identified recurring academic disciplines and patterns within faculty structures:
                    </p>
                    <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Usul al-Din (Theology, Qur'an, Hadith)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Sharia (Fiqh, Islamic law)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Da'wah (Comparative religion, apologetics)</li>
                      <li style={{ marginBottom: '0.5rem' }}>Tazkiyyah/Tasawwuf (Purification of the soul)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('step2', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, fontSize: '1.3rem', marginBottom: '1rem', margin: 0 }}>2. Youth Core Needs Research</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['step2'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['step2'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={{ marginBottom: '1rem' }}>Grounded in:</p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Erikson's psychosocial stages (identity vs. role confusion)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Piaget's formal operational stage (abstract thinking, search for meaning)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Islamic youth work & field observations</li>
                      </ul>
                      <p style={{ marginBottom: '1rem' }}>From this, we identified six core needs of youth:</p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Identity & Belonging</li>
                        <li style={{ marginBottom: '0.5rem' }}>Purpose & Meaning</li>
                        <li style={{ marginBottom: '0.5rem' }}>Guilt & Redemption</li>
                        <li style={{ marginBottom: '0.5rem' }}>Spiritual Numbness</li>
                        <li style={{ marginBottom: '0.5rem' }}>Struggle & Pressure</li>
                        <li style={{ marginBottom: '0.5rem' }}>Love & Safety</li>
                      </ul>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['step2'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('step3', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, fontSize: '1.3rem', marginBottom: '1rem', margin: 0 }}>3. Structure of the Wheels: Inward vs. Outward Orientation</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['step3'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['step3'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={{ marginBottom: '1rem' }}>
                        We categorized topics into four "Wheels" based on their direction of focus:
                      </p>
                      <div style={{ 
                        overflowX: 'auto', 
                        marginBottom: '1rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        <table style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          fontSize: '0.9rem',
                          lineHeight: '1.4'
                        }}>
                          <thead>
                            <tr style={{
                              backgroundColor: themeName === 'neon' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                              borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
                            }}>
                              <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>Wheel</th>
                              <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>Orientation</th>
                              <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Thematic Focus</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                              <td style={{ padding: '0.75rem', fontWeight: 'bold', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>2</td>
                              <td style={{ padding: '0.75rem', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>Outward</td>
                              <td style={{ padding: '0.75rem' }}>Widely taught subjects: Aqeedah, Qur'an, Seerah, Hadith, Fiqh, Shari'ah, History</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                              <td style={{ padding: '0.75rem', fontWeight: 'bold', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>3</td>
                              <td style={{ padding: '0.75rem', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>Outward</td>
                              <td style={{ padding: '0.75rem' }}>Less frequently taught: Modern ideologies, da'wah, arts, science</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                              <td style={{ padding: '0.75rem', fontWeight: 'bold', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>4</td>
                              <td style={{ padding: '0.75rem', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>Inward</td>
                              <td style={{ padding: '0.75rem' }}>Spirituality & tazkiyyah: based on Manāzil al-Sā'irīn by Sheikh al-Harawi, first phase</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                              <td style={{ padding: '0.75rem', fontWeight: 'bold', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>1</td>
                              <td style={{ padding: '0.75rem', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>Youth (hybrid)</td>
                              <td style={{ padding: '0.75rem' }}>Selected topics from 2–4, tailored to core youth needs</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['step3'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('step4', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, fontSize: '1.3rem', marginBottom: '1rem', margin: 0 }}>4. Mapping to Guided Flows & Core Needs</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['step4'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['step4'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Developed 6 guided flows (e.g. Guilt & Redemption, Love & Safety, Struggle & Pressure)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Mapped topics from Wheels 1 to 3 to these flows based on youth developmental and spiritual needs</li>
                      </ul>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['step4'] ? '-' : '+'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div 
            style={{
              ...sectionStyle,
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={(e) => toggleSection('coreNeeds', e)}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%'
            }}>
              <div style={{ flex: 1 }}>
                <h1 style={{ ...titleStyle, margin: 0, textAlign: 'left', color: '#000000', WebkitTextFillColor: '#000000', fontSize: '1.5rem' }}>Research on Youth Core Needs (13–18)</h1>
              </div>
              <span style={{
                ...expandIconStyle,
                marginLeft: '1rem'
              }}>
                {expandedSections['coreNeeds'] ? '-' : '+'}
              </span>
            </div>
            <div style={{
              ...contentStyle,
              maxHeight: expandedSections['coreNeeds'] ? 'none' : '0px', userSelect: 'text',
              opacity: expandedSections['coreNeeds'] ? 1 : 0,
              marginTop: '1rem',
              transform: expandedSections['coreNeeds'] ? 'translateY(0)' : 'translateY(-10px)'
            }}>
              <p style={paragraphStyle}>
                This section outlines six key psychological and spiritual needs commonly experienced by Muslim youth. 
                Each need is described through the lens of developmental psychology, drawing from theorists such as 
                Erik Erikson, Jean Piaget, and Lawrence Kohlberg. An interpretation column links each need to how 
                it manifests in a religious or spiritual context, particularly within Islam.
              </p>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
                onClick={(e) => handleSubsectionClick('identity', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ ...sectionTitleStyle, margin: 0 }}>1. Identity & Belonging</h2>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['identity'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['identity'] ? 1 : 0,
                      marginTop: '1rem',
                      transform: expandedSections['identity'] ? 'translateY(0)' : 'translateY(-5px)'
                    }}>
                      During adolescence, individuals begin to construct a coherent sense of self. 
                      According to Erikson, this stage involves resolving the conflict between identity and role confusion. 
                      Adolescents explore various social roles, values, and group affiliations to establish a stable identity 
                      and sense of belonging.
                      <br /><br />
                      <em>Muslim youth often navigate multiple identity layers — religious, ethnic, 
                      national, and social. Islam offers a foundational identity rooted in being a servant of Allah and a 
                      member of the ummah (global Muslim community). Questions like "Who am I as a Muslim in this society?" 
                      become central.</em>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['identity'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('purpose', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ ...sectionTitleStyle, margin: 0 }}>2. Purpose & Meaning</h2>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['purpose'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['purpose'] ? 1 : 0,
                      marginTop: '1rem',
                      transform: expandedSections['purpose'] ? 'translateY(0)' : 'translateY(-5px)'
                    }}>
                      Erikson and Kohlberg note that adolescents begin to reflect on their life's 
                      purpose and moral compass. They seek meaning beyond immediate gratification and may explore philosophical 
                      or ethical questions that shape their worldview.
                      <br /><br />
                      <em>In an Islamic context, these existential questions are tied to the 
                      concept of worship and divine purpose (e.g., Qur'an 51:56: "I did not create jinn and humans except 
                      to worship Me"). Youth may ask: "What is Allah's plan for me? What is my role as a khalifah 
                      (steward) on Earth?"</em>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['purpose'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('guilt', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ ...sectionTitleStyle, margin: 0 }}>3. Guilt & Redemption</h2>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['guilt'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['guilt'] ? 1 : 0,
                      marginTop: '1rem',
                      transform: expandedSections['guilt'] ? 'translateY(0)' : 'translateY(-5px)'
                    }}>
                      Piaget and Kohlberg emphasize the development of moral reasoning in 
                      adolescence. Youth begin to internalize ethical standards and experience guilt when their actions 
                      conflict with those standards. The desire to seek forgiveness and make amends often emerges.
                      <br /><br />
                      <em>Islam provides a structured path for repentance (tawbah), encouraging 
                      youth not to despair of Allah's mercy. Feelings of guilt can be a sign of faith, and seeking 
                      redemption through prayer, charity, or better conduct reinforces their spiritual growth.</em>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['guilt'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('numbness', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ ...sectionTitleStyle, margin: 0 }}>4. Spiritual Numbness</h2>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['numbness'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['numbness'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      A sense of emotional or cognitive disconnection can arise during 
                      adolescence, especially when abstract concepts like God or spirituality are not fully internalized. 
                      Erikson links this to identity diffusion; Piaget describes difficulty in grasping metaphysical 
                      ideas at certain developmental stages.
                      <br /><br />
                      <em>Muslim youth may struggle with rituals becoming mechanical or 
                      feeling distant from Allah. This numbness may show up in prayer or Quran recitation without 
                      emotional resonance. The concept of ihsan (spiritual excellence) invites them to reengage with 
                      sincerity and mindfulness.</em>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['numbness'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('struggle', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ ...sectionTitleStyle, margin: 0 }}>5. Struggle & Pressure</h2>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['struggle'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['struggle'] ? 1 : 0,
                      marginTop: '1rem',
                      transform: expandedSections['struggle'] ? 'translateY(0)' : 'translateY(-5px)'
                    }}>
                      Adolescents often face both internal conflicts (e.g., self-doubt, ego, 
                      temptation) and external pressures (e.g., peer influence, cultural expectations). Erikson sees this 
                      as part of identity development; Kohlberg identifies tension between societal norms and personal morals.
                      <br /><br />
                      <em>Islam recognizes internal struggle as jihad an-nafs — the struggle 
                      against the ego. External challenges such as Islamophobia, academic stress, or peer pressure can 
                      conflict with religious identity. Navigating these pressures requires spiritual resilience and 
                      community support.</em>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['struggle'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('love', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ ...sectionTitleStyle, margin: 0 }}>6. Love & Safety</h2>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['love'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['love'] ? 1 : 0,
                      marginTop: '1rem',
                      transform: expandedSections['love'] ? 'translateY(0)' : 'translateY(-5px)'
                    }}>
                      Erikson explains that early trust-building is essential for forming 
                      healthy relationships later in life. Adolescents need to feel emotionally secure and unconditionally 
                      accepted, especially as they seek deeper connections beyond their family.
                      <br /><br />
                      <em>The need for divine love and acceptance is central in Islam. Names 
                      of Allah such as <em>Al-Wadud</em> (The Loving) and <em>As-Salam</em> (The Source of Peace) reflect 
                      this divine safety net. Youth seek comfort in knowing they are seen, loved, and protected by their Creator.</em>
                    </div>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['love'] ? '-' : '+'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div 
            style={{
              ...sectionStyle,
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={(e) => toggleSection('motivation', e)}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%'
            }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ ...sectionTitleStyle, margin: 0, textAlign: 'left', color: '#000000' }}>My Personal Story and Motivation</h2>
              </div>
              <span style={{
                ...expandIconStyle,
                marginLeft: '1rem'
              }}>
                {expandedSections['motivation'] ? '-' : '+'}
              </span>
            </div>
            <div style={{
              ...contentStyle,
              maxHeight: expandedSections['motivation'] ? 'none' : '0px', userSelect: 'text',
              opacity: expandedSections['motivation'] ? 1 : 0,
              marginTop: '1rem'
            }}>
              
              <div 
                style={{
                  ...sectionStyle,
                  marginTop: '1rem',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('story6', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>Finding Answers Through Faith</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['story6'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['story6'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        I am a knowledge seeker, a bookworm, a family man, a software architect and a true believer in God Most High.
                      </p>
                      <p style={paragraphStyle}>
                        Part of my personal journey is shaped by the legacy of my grandfather, a Jewish survivor of the Second World War. He was one of only three known survivors from his entire family. Learning about the genocide that erased nearly all of my ancestral line confronted me at an early age with the deepest realities of injustice, suffering, and trauma.
                      </p>
                      <p style={paragraphStyle}>
                        For a while, my family situation led me to abandon my idealism. I believed the world was unchangeable. I lived a hedonistic lifestyle. DJ'ing, no money worries, popularity and party until the lights went out. But it cant fill the void of being deprived from God's light.
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('story6', e)}
                  >
                    {expandedSections['story6'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('story1', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>My Reversion to Islam</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['story1'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['story1'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        My return to Islam began in my mid-twenties and through Islam, I found not just comfort, but answers, real, spiritual answers to generational wounds. It gave me a new framework to understand history, justice, and human dignity, grounded in divine purpose and a way of changing the world.
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('story1', e)}
                  >
                    {expandedSections['story1'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('story2', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>My Educational Journey</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['story2'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['story2'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        I've always been driven to learn and reflect. I hold a master's degree in Public Administration and a bachelor's degree in Software Architecture. Beyond formal education, I've spent countless hours reading Islamic books, watching lectures, and studying da'wah content in my spare time.
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('story2', e)}
                  >
                    {expandedSections['story2'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('story4', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>My Vision for Change</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['story3'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['story3'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        From a young age, I've been driven to change the world—and I came to understand that true change comes through Islam, by following God. For years I thought about how to merge my professional work with my faith. Now, I want to build something that can help not just one person, but millions—perhaps more.
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('story3', e)}
                  >
                    {expandedSections['story3'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('story5', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>The Core Realization</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['story4'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['story4'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        I realized that the core issues facing today's generation will not be solved through politics or economics, but through returning to God. Inwardly and outwardly. But that return must be accessible. It must speak the language of today. It must address their doubts and emotions.
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('story4', e)}
                  >
                    {expandedSections['story4'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('story6', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>My Boundaries and Responsibility</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['story5'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['story5'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        Although I am constantly learning, I'm not a scholar. I can design, structure, and build the system, and take on the challenge as an muslim entrepreneur but I need guidance from those with deep Islamic knowledge to ensure the content is theologically sound and spiritually meaningful. My responsibility is to ensure the platform supports authentic content with integrity, safety, and usability.
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('story5', e)}
                  >
                    {expandedSections['story5'] ? '-' : '+'}
                  </span>
                </div>
              </div>



              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('story7', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>The Long-term Vision</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['story7'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['story7'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        It's about long-term transformation that, insha'Allah, leads to a stronger and healthier Ummah.
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('story7', e)}
                  >
                    {expandedSections['story7'] ? '-' : '+'}
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div 
            style={{
              ...sectionStyle,
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={(e) => toggleSection('appDescription', e)}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%'
            }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ ...sectionTitleStyle, margin: 0, textAlign: 'left', color: '#000000' }}>What is Wheel of Islam?</h2>
              </div>
              <span style={{
                ...expandIconStyle,
                marginLeft: '1rem'
              }}>
                {expandedSections['appDescription'] ? '-' : '+'}
              </span>
            </div>
            <div style={{
              ...contentStyle,
              maxHeight: expandedSections['appDescription'] ? 'none' : '0px', userSelect: 'text',
              opacity: expandedSections['appDescription'] ? 1 : 0,
              marginTop: '1rem'
            }}>
              
              <div 
                style={{
                  ...sectionStyle,
                  marginTop: '1rem',
                  cursor: 'pointer'
                }}
                onClick={(e) => handleSubsectionClick('coreConcept', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '100%',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>Core Concept</h3>
                  </div>
                  <span style={{
                    ...expandIconStyle,
                    marginLeft: '1rem'
                  }}>
                    {expandedSections['coreConcept'] ? '-' : '+'}
                  </span>
                </div>
                <div style={{
                  ...contentStyle,
                  maxHeight: expandedSections['coreConcept'] ? 'none' : '0px',
                  opacity: expandedSections['coreConcept'] ? 1 : 0,
                  marginTop: '1rem',
                  userSelect: 'text'
                }}>
                  <p style={paragraphStyle}>
                    <strong>Wheel of Islam. Insight. Spirituality. Growth.</strong>
                  </p>
                  <p style={paragraphStyle}>
                    Wheel of Islam is an Islamic spiritual health app that guides Muslim youth aged 13 to 18 in their spiritual and personal development.
                    It is rooted in Islamic tradition, informed by developmental psychology, and built to fit the digital world young people live in today.
                  </p>
                  <p style={paragraphStyle}>
                    The app is structured around three core pillars:
                  </p>
                  <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Insight</strong> — offering clear and structured Islamic knowledge that connects with daily challenges and real-life situations.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Spirituality</strong> — strengthening the inner connection with Allah through prayer, dhikr, and personal reflection.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Growth</strong> — fostering positive behaviour, emotional balance, and character development grounded in faith.</li>
                  </ul>
                  <p style={paragraphStyle}>
                    Using a mobile-first design and an interactive Wheels Model — with God (Allah) at the center of every wheel — the app combines visual clarity with spiritual depth.
                    Users are guided through Guided Flows: step-by-step journeys that respond to their emotional and spiritual needs using a cyclical, growth-oriented approach.
                  </p>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('twoWheels', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>The Two Wheels</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['twoWheels'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['twoWheels'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        <strong>🌀 Wheel 1 – Youth (subselection for Youth, based on wheel 2 and 3)</strong>
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Belief (ʿAqīdah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Jurisprudence (Fiqh)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Qur'an (Qurʾān)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Life of the Prophet (Sīrah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Islamic History (Tārīkh)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Modern Ideologies (Afkār Muʿāṣirah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Family & Society (Usrah wa Mujtamaʿ)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Divine Law (Sharīʿah)</li>
                      </ul>
                      
                      <p style={paragraphStyle}>
                        <strong>🌀 Wheel 2 – Outward (frequent taught knowledge)</strong>
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Law (Sharīʿah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Belief (ʿAqīdah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Jurisprudence (Fiqh)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Qur'an (Qurʾān)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Hadith (Ḥadīth)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Life of the Prophet (Sīrah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Islamic History (Tārīkh)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Economics & Finance (Iqtiṣād)</li>
                      </ul>
                      
                      <p style={paragraphStyle}>
                        <strong>🌀 Wheel 3 – Outward (less frequent taught knowledge)</strong>
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Art & Architecture (Fan wa ʿImārah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Literature & Poetry (Adab wa Shiʿr)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Education & Pedagogy (Tarbiyah wa Taʿlīm)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Comparative Religion (Adyān Muqāranah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Modern Ideologies (Afkār Muʿāṣirah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Da'wah (Daʿwah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Family & Society (Usrah wa Mujtamaʿ)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Science (ʿIlm)</li>
                      </ul>
                      
                      <p style={paragraphStyle}>
                        <strong>🌀 Wheel 4 – Innerlijke stations / spirituele thema's</strong>
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Wakefulness (Yaqẓah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Self-Reckoning (Muḥāsabah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Returning (Inābah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Reflection (Tafakkur)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Taking Shelter (Iʿtiṣām)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Fleeing (Firār)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Training (Riyāḍah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Hearing (Samāʿ)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Soul (Nafs)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Remembrance (Dhikr)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Repentance (Tawbah)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Sincerity (Ikhlāṣ)</li>
                      </ul>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('twoWheels', e)}
                  >
                    {expandedSections['twoWheels'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('guidedFlows', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>Guided Flows</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['guidedFlows'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['guidedFlows'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        The app offers "Guided Flows" - structured journeys that address specific youth needs:
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Guilt & Redemption - "The Door That Never Closes"</li>
                        <li style={{ marginBottom: '0.5rem' }}>Love & Safety - "Held in His Mercy"</li>
                        <li style={{ marginBottom: '0.5rem' }}>Inner Self - "Whispers Beneath the Surface"</li>
                        <li style={{ marginBottom: '0.5rem' }}>Purpose & Meaning - "You Were Meant for More"</li>
                        <li style={{ marginBottom: '0.5rem' }}>Struggle & Pressure - "The Weight and the Wings"</li>
                        <li style={{ marginBottom: '0.5rem' }}>Identity & Belonging - "Between Worlds, Still Whole"</li>
                        <li style={{ marginBottom: '0.5rem' }}>Worship & Connection - "When Silence Speaks to Allah"</li>
                      </ul>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('guidedFlows', e)}
                  >
                    {expandedSections['guidedFlows'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('approach', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>Approach and Foundation</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['approach'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['approach'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        The app is based on:
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Research into youth needs (13-18 years)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Comparison of curricula from Islamic universities worldwide</li>
                        <li style={{ marginBottom: '0.5rem' }}>Developmental psychology (Erikson, Piaget, Kohlberg)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Modern UX/UI design with different themes (stylized, neon, black-white, etc.)</li>
                      </ul>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('approach', e)}
                  >
                    {expandedSections['approach'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('features', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>Unique Features</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['features'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['features'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Interactive wheels that users can click on</li>
                        <li style={{ marginBottom: '0.5rem' }}>Poetic titles that create emotional connection</li>
                        <li style={{ marginBottom: '0.5rem' }}>Multilingual support (Arabic phonetic transcriptions)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Themes and night mode for personal preferences</li>
                        <li style={{ marginBottom: '0.5rem' }}>Responsive design for different devices</li>
                      </ul>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('features', e)}
                  >
                    {expandedSections['features'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('mission', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>Mission</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['mission'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['mission'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        The app aims to provide accessible, meaningful Islamic education and spirituality that connects with the psychological and spiritual needs of Muslim youth. By presenting traditional knowledge from early spiritual scholars in a way that is relevant to their life experiences and challenges.
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('mission', e)}
                  >
                    {expandedSections['mission'] ? '-' : '+'}
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div 
            style={{
              ...sectionStyle,
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={(e) => toggleSection('meetingStructure', e)}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%'
            }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ ...sectionTitleStyle, margin: 0, textAlign: 'left', color: '#000000' }}>Full Meeting Structure</h2>
              </div>
              <span style={{
                ...expandIconStyle,
                marginLeft: '1rem'
              }}>
                {expandedSections['meetingStructure'] ? '-' : '+'}
              </span>
            </div>
            <div style={{
              ...contentStyle,
              maxHeight: expandedSections['meetingStructure'] ? 'none' : '0px', userSelect: 'text',
              opacity: expandedSections['meetingStructure'] ? 1 : 0,
              marginTop: '1rem'
            }}>
              
              <div 
                style={{
                  ...sectionStyle,
                  marginTop: '1rem',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('structure', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>Structure</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['structure'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['structure'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <ol style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Opening (5–7 min)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Personal motivation (5–7 min)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Introduction to the problem (5 min)</li>
                        <li style={{ marginBottom: '0.5rem' }}>App demonstration (20–25 min)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Target audience & scale (5 min)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Invitation to join (10–12 min)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Closing (3–5 min)</li>
                      </ol>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('structure', e)}
                  >
                    {expandedSections['structure'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('opening', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>1. Opening (5–7 min)</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['opening'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['opening'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Greet Shaykh Hatem with respect and make duʿā for his work.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Acknowledge his scholarly contribution on tazkiyyah.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Briefly explain that you are not a scholar, but someone building bridges between classical knowledge and today's youth.</li>
                      </ul>
                      <p style={paragraphStyle}>
                        <em>"Your analysis on reclaiming tazkiyyah as a Sunni inheritance is exactly what motivated me to reach out."</em>
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('opening', e)}
                  >
                    {expandedSections['opening'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('personalMotivation', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>2. Personal Motivation (5–7 min)</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['personalMotivation'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['personalMotivation'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        Share your personal reason for starting this project:
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>A sense of emptiness among Muslim youth</li>
                        <li style={{ marginBottom: '0.5rem' }}>A lack of trustworthy, spiritual, and accessible content</li>
                        <li style={{ marginBottom: '0.5rem' }}>Aware of your <em>amānah</em> as a technologist and designer</li>
                      </ul>
                      <p style={paragraphStyle}>
                        <em>"Young Muslims are hungry for connection with Allah — but all they're offered is rules or vague mysticism."</em>
                      </p>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('personalMotivation', e)}
                  >
                    {expandedSections['personalMotivation'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('problem', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>3. Introduction to the Problem (5 min)</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['problem'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['problem'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        There's a flood of Islamic content — but very little that is:
                      </p>
                      <ol style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Pedagogically adapted to youth</li>
                        <li style={{ marginBottom: '0.5rem' }}>Visually and digitally engaging</li>
                      </ol>
                      <p style={paragraphStyle}>
                        Reference Shaykh Hatem's quote:
                      </p>
                      <p style={paragraphStyle}>
                        <em>"We need to reclaim [tasawwuf] for our own benefit and for the benefit of our dīn, so that a Sunni interpretation of tasawwuf prevails."</em>
                      </p>
                      <p style={paragraphStyle}>
                        Compare with secular and Christian apps that show proven demand:
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Headspace</strong>: 70M+ users</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Calm</strong>: 4.5M+ paying subscribers</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Hallow</strong> (Catholic): 250K+ paying users</li>
                      </ul>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('problem', e)}
                  >
                    {expandedSections['problem'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('demonstration', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>4. App Demonstration (20–25 min)</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['demonstration'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['demonstration'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        <strong>Core Concept:</strong>
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Two main wheels: Knowledge & Insight (e.g., ʿAqīdah, Fiqh) and Purification of the Heart (e.g., Yaqzah, Muhāsabah)</li>
                      </ul>
                      <p style={paragraphStyle}>
                        <strong>Methodology:</strong>
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Rooted in Qurʾān & Sunnah</li>
                        <li style={{ marginBottom: '0.5rem' }}>Inspired by early Sunni-Sufi figures (e.g., al-Junayd, al-Karkhī)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Psychologically informed (Erikson, Piaget, Kohlberg)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Built on modern UX principles</li>
                      </ul>
                      <p style={paragraphStyle}>
                        <strong>Key Features:</strong>
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Guided flows for themes like guilt, purpose, stress, identity</li>
                        <li style={{ marginBottom: '0.5rem' }}>Youth-friendly UX (dark mode, visual themes)</li>
                      </ul>
                      <p style={paragraphStyle}>
                        <strong>Scalability Potential:</strong>
                      </p>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Future expansion into: Localization (Arabic, French, Turkish), Mosque & school partnerships, In-app mentorship structure</li>
                      </ul>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('demonstration', e)}
                  >
                    {expandedSections['demonstration'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('audience', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>5. Audience Size & Global Opportunity (5 min)</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['audience'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['audience'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>~140 million English-speaking Muslim teens (13–18 years)</li>
                        <li style={{ marginBottom: '0.5rem' }}>1% adoption = 1.4 million users</li>
                      </ul>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('audience', e)}
                  >
                    {expandedSections['audience'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('invitation', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>6. Invitation to Join (10–12 min)</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['invitation'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['invitation'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <p style={paragraphStyle}>
                        <strong>Why this matters:</strong>
                      </p>
                      <ol style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Strategic theological impact</strong><br/>Play an active role in repositioning <em>tazkiyyah</em> as a core, authentically Sunni concept in the digital age.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Protection of the spiritual legacy</strong><br/>Preserve and reframe traditional spirituality based on Qurʾān & Sunnah, defending it from dilution or ideological drift.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Influence on youth at scale</strong><br/>Directly impact the moral and spiritual development of millions of young Muslims worldwide.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Thought leadership in Islamic innovation</strong><br/>Serve as a theological anchor in the growing but often unstructured space of digital daʿwah.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Tangible, lasting legacy</strong><br/>Pass down the teachings of the early <em>mashāyikh</em> through a platform today's generation actually uses.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Flexible involvement</strong><br/>Engage on your own terms: from content supervision to light advisory role.</li>
                      </ol>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('invitation', e)}
                  >
                    {expandedSections['invitation'] ? '-' : '+'}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  ...sectionStyle,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={(e) => handleSubsectionClick('closing', e)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  userSelect: 'none'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.2rem' }}>7. Closing (3–5 min)</h3>
                    <div style={{
                      ...contentStyle,
                      maxHeight: expandedSections['closing'] ? 'none' : '0px', userSelect: 'text',
                      opacity: expandedSections['closing'] ? 1 : 0,
                      marginTop: '1rem'
                    }}>
                      <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Thank him for his time and scholarship.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Ask permission for a follow-up conversation.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Leave behind a digital or physical summary/demo.</li>
                      </ul>
                    </div>
                  </div>
                  <span 
                    style={{
                      ...expandIconStyle,
                      marginLeft: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => handleSubsectionClick('closing', e)}
                  >
                    {expandedSections['closing'] ? '-' : '+'}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 