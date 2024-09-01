import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCopy,
  faFile,
  faFolder,
  faFolderOpen,
  faMagnifyingGlass,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IconProps {
  name: "search" | "file" | "folder" | "folder-open" | "copy";
  size?: SizeProp;
}

export const Icon = React.memo(
  ({ name = "search", size = "2x" }: IconProps) => {
    const icons: { [key: string]: IconDefinition } = {
      search: faMagnifyingGlass,
      file: faFile,
      folder: faFolder,
      "folder-open": faFolderOpen,
      copy: faCopy,
    };
    return <FontAwesomeIcon icon={icons[name]} size={size} />;
  },
  (prevProps, nextProps) => {
    return (
      prevProps.name === nextProps.name && prevProps.size === nextProps.size
    );
  }
);
