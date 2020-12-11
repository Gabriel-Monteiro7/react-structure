import filesize from "filesize";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

import {
  Container,
  Content,
  DropContainer,
  FileInfo,
  Preview,
  UploadMessage,
  UploadMessageError,
  ContainerLeft,
  ContainerRight,
  CheckCircle,
  Error,
  Link,
  AttachFile,
} from "./styles";
import { useIntl } from "react-intl";

export default function File({ setFile }: any) {
  const intl = useIntl();

  const [uploadedFiles, setUploadedFiles]: any = useState({});
  function handleUpload(file: any) {
    setFile(file[0]);
    setUploadedFiles({
      file: file[0],
      id: "0",
      name: file[0].name,
      readableSize: filesize(file[0].size),
      preview: URL.createObjectURL(file[0]),
      progress: 0,
      uploaded: true,
      error: false,
      url: false,
    });
  }
  function handleDelete(id: any) {
    setUploadedFiles({});
    setFile(null);
  }
  console.log(uploadedFiles);
  
  return (
    <Content>
      {uploadedFiles?.id === undefined && (
        <Dropzone
          multiple
          maxSize={2097152} //2mb
          accept={"image/*,application/pdf"}
          onDropAccepted={(value: any) => {
            handleUpload(value);
          }}
        >
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragReject,
            fileRejections,
          }: any) => (
            <DropContainer {...getRootProps()}>
              <input {...getInputProps()} />
              {!isDragActive || fileRejections.length > 0 ? (
                <UploadMessage type={""}>
                  <AttachFile />
                  {intl.formatMessage({
                    id: "btn.icon.attach",
                  })}
                  {fileRejections.length > 0 && (
                    <UploadMessageError type="error" variant={"body2"}>
                      {intl.formatMessage({
                        id: "attachment.archive.outSize",
                      })}
                    </UploadMessageError>
                  )}
                </UploadMessage>
              ) : isDragReject ? (
                <UploadMessage type="error">
                  {intl.formatMessage({
                    id: "inputFile.notSuported.text",
                  })}
                </UploadMessage>
              ) : (
                <UploadMessage type="success">
                  {intl.formatMessage({
                    id: "inputFile.dropHere.text",
                  })}
                </UploadMessage>
              )}
            </DropContainer>
          )}
        </Dropzone>
      )}
      {!!uploadedFiles.id && (
        <Container key={uploadedFiles.id}>
          <FileInfo>
            <Preview src={uploadedFiles.preview} />
            <ContainerLeft>
              <strong>{uploadedFiles.name}</strong>
              <span>
                {uploadedFiles.readableSize}{" "}
                {!!uploadedFiles.preview && (
                  <button onClick={() => handleDelete(uploadedFiles.id)}>
                    {intl.formatMessage({
                      id: "inputFile.button.delete",
                    })}
                  </button>
                )}
              </span>
            </ContainerLeft>
          </FileInfo>
          <ContainerRight>
            {uploadedFiles.preview && (
              <a
                href={uploadedFiles.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link />
              </a>
            )}
            {uploadedFiles.uploaded && <CheckCircle />}
            {uploadedFiles.error && <Error />}
          </ContainerRight>
        </Container>
      )}
    </Content>
  );
}
