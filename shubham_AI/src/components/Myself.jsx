import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Button,
  Center,
  Link
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { assets } from '../assets/assets';

function Myself() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}>
        <Avatar
          size={'m'}  // Increased preset size for button avatar
          src={assets.user_icon}
        />
      </MenuButton>
      <MenuList alignItems={'end'}>
        <br />
        <Center>
          <Avatar
            boxSize="150px"  // Custom size for larger avatar
            src={assets.user_icon}
            style={{ width: '250px', height: '150px' }}  // Ensure the style is applied
          />
        </Center>
        <br />
        <Center>
          <p>Username</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem icon={<FaGithub />}>
          <Link href="https://github.com/yourusername" isExternal>
            GitHub
          </Link>
        </MenuItem>
        <MenuItem icon={<FaLinkedinIn />}>
          <Link href="https://linkedin.com/in/yourusername" isExternal>
            LinkedIn
          </Link>
        </MenuItem>
        <MenuItem icon={<FaEnvelope />}>
          <Link href="mailto:your.email@example.com">
            Email
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default Myself;
