import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import download from "downloadjs";
import { toPng, toJpeg, toSvg } from 'html-to-image';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #000000;
  color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
  &:hover {
    background-color: #3d3d3d;
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px;
  cursor: pointer;
  background-color: ${props => (props.isActive ? '#e0e0e0' : '#f5f5f5')};
  border: none;
  border-bottom: ${props => (props.isActive ? '3px solid #333' : 'none')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  &:focus {
    outline: none;
  }
`;

const TabPanel = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  padding: 10px 0;
`;

const ColorInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [qrSize, setQrSize] = useState(250);
  const [qrBgColor, setQrBgColor] = useState('#ffffff');
  const [qrFgColor, setQrFgColor] = useState('#000000');
  const [activeTab, setActiveTab] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState('png');
  const [downloadMessage, setDownloadMessage] = useState('');
  const [warningMessage, setWarningMessage] = useState('');
  const qrRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    if (inputValue.trim() === '') {
      setWarningMessage('Por favor, rellena el campo de entrada.');
      return;
    }
    setQrValue(inputValue);
    setWarningMessage('');
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setInputValue('');
    setQrValue('');
    setWarningMessage('');
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleConfirmDownload = async () => {
    if (qrRef.current) {
      const node = qrRef.current;
      let dataUrl;
      if (selectedFormat === 'png') {
        dataUrl = await toPng(node);
      } else if (selectedFormat === 'jpeg') {
        dataUrl = await toJpeg(node);
      } else if (selectedFormat === 'svg') {
        dataUrl = await toSvg(node);
      }
      download(dataUrl, `qr-code.${selectedFormat}`);
      setDownloadMessage('Su QR se ha descargado con éxito');
    }
  };

  return (
    <Container>
      <TabContainer>
        <TabList>
          <Tab isActive={activeTab === 0} onClick={() => handleTabClick(0)}>Texto</Tab>
          <Tab isActive={activeTab === 1} onClick={() => handleTabClick(1)}>URL</Tab>
          <Tab isActive={activeTab === 2} onClick={() => handleTabClick(2)}>Teléfono</Tab>
          <Tab isActive={activeTab === 3} onClick={() => handleTabClick(3)}>Correo</Tab>
          <Tab isActive={activeTab === 4} onClick={() => handleTabClick(4)}>Localización</Tab>
        </TabList>
        <TabPanel isActive={activeTab === 0}>
          <p>Introduce la información</p>
          <Input
            type="text"
            placeholder="Inserte un texto"
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage && inputValue.trim() === '' ? '#B41400' : '' }}
          />
        </TabPanel>
        <TabPanel isActive={activeTab === 1}>
          <p>Introduce la URL</p>
          <Input
            type="text"
            placeholder="https://www.ejemplo.com"
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage && inputValue.trim() === '' ? '#B41400' : '' }}
          />
        </TabPanel>
        <TabPanel isActive={activeTab === 2}>
          <p>Introduce el número de teléfono</p>
          <Input
            type="text"
            placeholder="912 345 678"
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage && inputValue.trim() === '' ? '#B41400' : '' }}
          />
        </TabPanel>
        <TabPanel isActive={activeTab === 3}>
          <p>Introduce la dirección de e-mail</p>
          <Input
            type="text"
            placeholder="ejemplo@hotmail.com"
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage && inputValue.trim() === '' ? '#B41400' : '' }}
          />
        </TabPanel>
        <TabPanel isActive={activeTab === 4}>
          <p>Introduce las coordenadas</p>
          <Input
            type="text"
            placeholder="Latitud (41 24.2028), Longitud (2 10.4418)"
            value={inputValue}
            onChange={handleChange}
            style={{ borderColor: warningMessage && inputValue.trim() === '' ? '#B41400' : '' }}
          />
        </TabPanel>
      </TabContainer>
      <p>Selecciona el tamaño (px):</p>
      <Input
        type="number"
        placeholder="Tamaño (px)"
        value={qrSize}
        onChange={(e) => setQrSize(e.target.value)}
      />
      <ColorInputContainer>
        <div>
          <p>Color de fondo:</p>
          <Input
            type="color"
            value={qrBgColor}
            onChange={(e) => setQrBgColor(e.target.value)}
          />
        </div>
        <div>
          <p>Color del código:</p>
          <Input
            type="color"
            value={qrFgColor}
            onChange={(e) => setQrFgColor(e.target.value)}
          />
        </div>
      </ColorInputContainer>
      <Button onClick={handleGenerate}>Generar Código QR</Button>
      {qrValue && (
        <div>
          <div id="qrCode" ref={qrRef} style={{ margin: '20px 0' }}>
            <QRCode value={qrValue} size={qrSize} bgColor={qrBgColor} fgColor={qrFgColor} />
          </div>
          <div>
            <p>El contenido introducido es el siguiente:</p>
            <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
              <p>{inputValue}</p>
            </div>
          </div>
          <RadioGroup>
            <label>
              <input
                type="radio"
                value="png"
                checked={selectedFormat === 'png'}
                onChange={handleFormatChange}
              />
              PNG
            </label>
            <label>
              <input
                type="radio"
                value="jpeg"
                checked={selectedFormat === 'jpeg'}
                onChange={handleFormatChange}
              />
              JPEG
            </label>
            <label>
              <input
                type="radio"
                value="svg"
                checked={selectedFormat === 'svg'}
                onChange={handleFormatChange}
              />
              SVG
            </label>
          </RadioGroup>
          <Button onClick={handleConfirmDownload}>Descargar</Button>
          {downloadMessage && <p>{downloadMessage}</p>}
        </div>
      )}
    </Container>
  );
};

export default QrCodeGenerator;
