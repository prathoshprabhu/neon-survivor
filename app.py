import streamlit as st

st.set_page_config(
    page_title="The 99 Survival",
    page_icon="logo.jpg",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Hide Streamlit UI elements for fullscreen game experience
st.markdown("""
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        .stApp {
            margin: 0;
            padding: 0;
        }
        .block-container {
            padding: 0 !important;
            max-width: 100% !important;
        }
        iframe {
            border: none !important;
        }
    </style>
""", unsafe_allow_html=True)

# Read the game HTML
with open("index.html", "r") as f:
    game_html = f.read()

# Embed the game
st.components.v1.html(game_html, height=900, scrolling=False)
