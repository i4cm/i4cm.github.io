window.CODES = {
 "9": {
  "cat": "Security software / Hardware",
  "msg": "The iPhone could not be restored. An unknown error occurred (9).",
  "self": "Temporarily disable third-party antivirus/firewall and retry the update; use a genuine cable, a rear USB port on the case, and a different computer; force-restart and choose Update (not Restore) first.",
  "hw": "If software fixes all fail, it is usually cold-jointed / failed NAND flash storage, insufficient power, or a storage-to-CPU communication fault.",
  "tip": "If 9 appears only a long while after you unplug the cable, the storage isn't being detected at all.",
  "scene": "Most common when the device disconnects in the second half of a restore."
 },
 "4005": {
  "cat": "USB connection / Hardware",
  "msg": "The iPhone could not be restored. An unknown error occurred (4005).",
  "self": "Try a genuine cable, a rear USB port and another computer, then re-flash in DFU mode.",
  "hw": "Usually the CPU or its power circuitry.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "USB connection / Hardware",
  "msg": "The iPhone could not be restored. An unknown error occurred (4013).",
  "self": "Use a short genuine cable, a rear USB port and another computer; re-flash in DFU; if iTunes hits a hosts/proxy problem, restore the hosts file and disable the firewall.",
  "hw": "When every software step still fails, it is usually a RAM-CPU-storage bus issue; a graphics glitch + reboot can mean a bus fault.",
  "tip": "Reported after the progress bar appears -> leans storage; reported immediately -> check cable/USB first.",
  "scene": "Common when downgrading, or when a third-party tool rewrote the hosts file to redirect gs.apple.com (iTunes fails to reach the server on ports 80/443)."
 },
 "4014": {
  "cat": "USB connection / Hardware",
  "msg": "The iPhone could not be restored. An unknown error occurred (4014).",
  "self": "Change cable/port and re-flash in DFU mode.",
  "hw": "Faulty temporary SDRAM and its circuit / unstable upper SoC / battery too low.",
  "tip": "No Apple logo -> often a CPU top-cap issue; Apple logo shows -> leans storage.",
  "scene": ""
 },
 "4037": {
  "cat": "Device state",
  "msg": "The iPhone could not be restored. An unknown error occurred (4037).",
  "self": "Appears when the device has a passcode and isn't unlocked. Unlock it on-device, keep the screen awake, then restore.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "USB connection / Hardware",
  "msg": "The iPhone could not be restored. An unknown error occurred (14).",
  "self": "Change the cable / USB port; you can also retry a few times.",
  "hw": "Insufficient storage or battery power, or a computer issue; older notes also include corrupt firmware -> delete the downloaded firmware and re-download.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Hardware / Storage",
  "msg": "Could not restore (11).",
  "self": "Free up the system drive (keep >=10 GB) and re-download the firmware.",
  "hw": "System drive full, or a corrupt firmware file.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Network / Apple servers",
  "msg": "The iPhone could not be restored. An unknown error occurred (3194).",
  "self": "Flash only a currently-signed version; restore the hosts file (remove lines pointing to old signing servers); disable proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Always appears when downgrading to an iOS that Apple no longer signs."
 },
 "3004": {
  "cat": "Network / Cable",
  "msg": "Reported right after the Apple logo while the progress bar moves (3004 / 3014 / 2005).",
  "self": "Switch to a stable network, change the cable, and check the hosts file.",
  "hw": "",
  "tip": "",
  "scene": "Reported just as the progress starts -> usually a cable / computer / network issue."
 },
 "53": {
  "cat": "Hardware",
  "msg": "The iPhone could not be restored. An unknown error occurred (53).",
  "self": "Connect the computer via a phone hotspot and re-flash to rule out auth/network factors.",
  "hw": "Usually a damaged Touch ID / Face ID module; the matching hardware must be replaced.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Hardware / Baseband",
  "msg": "Could not restore (-1).",
  "self": "Not software-fixable; needs bench repair.",
  "hw": "A baseband power rail is missing, or a rail is shorted to ground; the baseband CPU soldering is incomplete.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Hardware / Baseband",
  "msg": "Could not restore (1).",
  "self": "Send for baseband inspection.",
  "hw": "Baseband CPU not detected; check whether the baseband PMU outputs power and whether the baseband CPU is cold-jointed.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Hardware / Baseband",
  "msg": "Could not restore (3).",
  "self": "Send for baseband inspection.",
  "hw": "Faulty baseband, the EEPROM and its circuit.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Hardware",
  "msg": "Could not restore (6).",
  "self": "Restore twice more with a known-good cable / computer / network; if it persists, repair.",
  "hw": "Cold-jointed SoC, or damaged storage.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Software too new",
  "msg": "Could not restore (10).",
  "self": "The device iOS is newer than the computer side; update Mac / iTunes / Apple Devices app, then retry.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / downgrade",
  "msg": "The required resource can't be found / (1015).",
  "self": "Jailbroken or downgrading devices trigger this; use recovery mode to flash back to the latest iOS.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Security software / Network",
  "msg": "Reported while downloading firmware (9006).",
  "self": "The download is blocked by a firewall/network; disable the firewall, or download the matching IPSW manually and restore locally.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Network",
  "msg": "Firmware download timed out (50 / -50).",
  "self": "50 is an Apple-side download timeout; switch to a stable network or download firmware manually. -50 is usually an aisi-helper server timeout; check your proxy or update to the latest client.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Driver",
  "msg": "0xE8000015",
  "self": "Reinstall the Apple Mobile Device driver / AMDS and change cable/port; or use a repair toolkit's one-click iTunes & driver repair.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
