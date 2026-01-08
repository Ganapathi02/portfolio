import shutil

source = r"C:\Users\GANAPATHI.GANA\.gemini\antigravity\brain\4cc2bf9d-9348-40f3-8398-37f496cee6a2\favicon_g_blue_1767836391312.png"
dest1 = r"e:\New folder (2)\portfolio\app\icon.png"
dest2 = r"e:\New folder (2)\portfolio\public\favicon.ico"

try:
    shutil.copy(source, dest1)
    print(f"✓ Copied to: {dest1}")
    shutil.copy(source, dest2)
    print(f"✓ Copied to: {dest2}")
    print("\n✅ Icon files created successfully!")
except Exception as e:
    print(f"❌ Error: {e}")
